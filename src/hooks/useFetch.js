import { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';

export const useFetch = (url, options = {}) => {
  const { token, refreshTokenFunction } = useAuth();
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Agregar el token a los headers si existe
        const fetchOptions = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: token ? `Bearer ${token}` : '',
          },
        };

        let response = await fetch(url, fetchOptions);

        if (response.status === 401 && token) {
          // Intentar refrescar el token y reintentar la solicitud
          const newToken = await refreshTokenFunction();

          if (newToken) {
            fetchOptions.headers.Authorization = `Bearer ${newToken}`;
            response = await fetch(url, fetchOptions);
          } else {
            throw new Error('No se pudo refrescar el token');
          }
        }

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        setDatos(data);
      } catch (err) {
        setError(err.message || 'Ocurrió un error');
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [url, options, token]);

  return { datos, cargando, error };
};