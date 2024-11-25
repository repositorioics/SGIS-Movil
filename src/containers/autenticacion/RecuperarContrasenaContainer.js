// hooks/useFetch.js
import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { getTokens } from '@utils/storage';
import { API_URL } from '@constants/config';

export const useFetch = (url, options = {}, autoFetch = true, useAuthToken = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      let fetchOptions = {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      };

      // Si se requiere token y es una ruta protegida
      if (useAuthToken) {
        const tokens = await getTokens();
        const { accessToken } = tokens;

        if (accessToken) {
          fetchOptions.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          throw new Error('No token found');
        }
      }

      let response = await fetch(`${API_URL}${url}`, fetchOptions);

      // Si el token ha expirado, intenta refrescarlo y reintenta la solicitud
      if (response.status === 401 && useAuthToken) {
        const refreshTokenResponse = await refreshToken();
        if (refreshTokenResponse) {
          fetchOptions.headers.Authorization = `Bearer ${refreshTokenResponse}`;
          response = await fetch(`${API_URL}${url}`, fetchOptions);
        } else {
          throw new Error('Failed to refresh token');
        }
      }

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options, useAuthToken]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return { data, loading, error, refetch: fetchData };
};