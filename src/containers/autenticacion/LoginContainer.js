// containers/autenticacion/LoginContainer.js
import React, { useState, useEffect } from 'react';
import PantallaLogin from '@screens/autenticacion/PantallaLogin';
import { useFetch } from '@hooks/useFetch';
import { saveItem } from '@utils/storage';
import { useTranslation } from 'react-i18next';
import { API_URL } from '@constants/url';

export default function LoginContainer({ navigation }) {
  const { t } = useTranslation();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const { data, loading, error, refetch } = useFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username: nombreUsuario, password: contrasena }),
    headers: {
      'Content-Type': 'application/json',
    },
  }, false, false); // autoFetch en false y requireAuth en false

  const handleLogin = () => {
    if (nombreUsuario && contrasena) {
      refetch();
    } else {
      AlertaInformativa({ tipo: 'warning', titulo: 'Advertencia', mensaje: t('llenar_todos_los_campos') });
    }
  };

  useEffect(() => {
    if (data?.data?.accessToken && data?.data?.refreshToken) {
      saveItem('@accessToken', data.data.accessToken);
      saveItem('@refreshToken', data.data.refreshToken);
      AlertaInformativa({ tipo: 'success', titulo: 'Éxito', mensaje: t('inicio_sesion_exitoso') });
      navigation.navigate('HomeScreen');
    }
    if (error) {
      AlertaInformativa({ tipo: 'error', titulo: 'Error', mensaje: error });
    }
  }, [data, error, navigation]);

  return (
    <PantallaLogin
      nombreUsuario={nombreUsuario}
      setNombreUsuario={setNombreUsuario}
      contrasena={contrasena}
      setContrasena={setContrasena}
      handleLogin={handleLogin}
      cargando={loading}
      error={error}
      navigation={navigation}
    />
  );
}