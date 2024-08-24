import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const initializeTokens = async () => {
    const storedToken = await AsyncStorage.getItem('jwtToken');
    const storedRefreshToken = await AsyncStorage.getItem('refreshToken');
    setToken(storedToken);
    setRefreshToken(storedRefreshToken);
  };

  const saveToken = async (newToken, newRefreshToken) => {
    await AsyncStorage.setItem('jwtToken', newToken);
    await AsyncStorage.setItem('refreshToken', newRefreshToken);
    setToken(newToken);
    setRefreshToken(newRefreshToken);
  };

  const clearToken = async () => {
    await AsyncStorage.removeItem('jwtToken');
    await AsyncStorage.removeItem('refreshToken');
    setToken(null);
    setRefreshToken(null);
  };

  const refreshTokenFunction = async () => {
    try {
      const response = await fetch('/api/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        saveToken(data.newToken, data.newRefreshToken);
        return data.newToken;
      } else {
        clearToken();
        return null;
      }
    } catch (error) {
      console.error('Error al refrescar el token:', error);
      clearToken();
      return null;
    }
  };

  // Inicializar tokens al cargar el hook
  useState(() => {
    initializeTokens();
  }, []);

  return { token, saveToken, clearToken, refreshTokenFunction };
};
// import { useState } from 'react';

// export const useAuth = () => {
//   const [token, setToken] = useState(localStorage.getItem('jwtToken'));
//   const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

//   const saveToken = (newToken, newRefreshToken) => {
//     localStorage.setItem('jwtToken', newToken);
//     localStorage.setItem('refreshToken', newRefreshToken);
//     setToken(newToken);
//     setRefreshToken(newRefreshToken);
//   };

//   const clearToken = () => {
//     localStorage.removeItem('jwtToken');
//     localStorage.removeItem('refreshToken');
//     setToken(null);
//     setRefreshToken(null);
//   };

//   const refreshTokenFunction = async () => {
//     try {
//       const response = await fetch('/api/refresh-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token: refreshToken }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         saveToken(data.newToken, data.newRefreshToken);
//         return data.newToken;
//       } else {
//         clearToken();
//         return null;
//       }
//     } catch (error) {
//       console.error('Error al refrescar el token:', error);
//       clearToken();
//       return null;
//     }
//   };

//   return { token, saveToken, clearToken, refreshTokenFunction };
// };