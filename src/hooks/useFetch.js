// hooks/useFetch.js
import { useState, useEffect, useCallback } from 'react';
import { AlertaInformativa } from '@components/AlertaInformativa';
import { saveItem, getItem, removeItem } from '@utils/storage';
import { API_URL } from '@constants/url';

const refreshTokenFunction = async () => {
  const refreshToken = await getItem('@refreshToken');
  if (!refreshToken) {
    AlertaInformativa({ tipo: 'error', titulo: 'Error', mensaje: 'No hay refresh token disponible' });
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      const { accessToken, refreshToken: newRefreshToken } = data.data;
      await saveItem('@accessToken', accessToken);
      await saveItem('@refreshToken', newRefreshToken);
      return accessToken;
    } else {
      await removeItem('@accessToken');
      await removeItem('@refreshToken');
      AlertaInformativa({ tipo: 'error', titulo: 'Error', mensaje: 'Error al refrescar el token' });
      return null;
    }
  } catch (error) {
    AlertaInformativa({ tipo: 'error', titulo: 'Error', mensaje: 'Error en la solicitud de refresh token' });
    await removeItem('@accessToken');
    await removeItem('@refreshToken');
    return null;
  }
};

export const useFetch = (url, options = {}, autoFetch = true, requireAuth = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const accessToken = requireAuth ? await getItem('@accessToken') : null;
      let fetchOptions = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };

      let response = await fetch(`${API_URL}${url}`, fetchOptions);

      if (response.status === 401 && requireAuth) {
        const newToken = await refreshTokenFunction();
        if (newToken) {
          fetchOptions.headers.Authorization = `Bearer ${newToken}`;
          response = await fetch(`${API_URL}${url}`, fetchOptions);
        } else {
          throw new Error('No se pudo refrescar el token');
        }
      }

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
      AlertaInformativa({ tipo: 'success', titulo: 'Éxito', mensaje: 'Operación exitosa' });
    } catch (err) {
      setError(err.message || 'Ocurrió un error');
      AlertaInformativa({ tipo: 'error', titulo: 'Error', mensaje: err.message || 'Ocurrió un error' });
    } finally {
      setLoading(false);
    }
  }, [url, options, requireAuth]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return { data, loading, error, refetch: fetchData };
};