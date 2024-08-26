import React, { useState, useEffect } from 'react';
import PantallaLogin from '@screens/autenticacion/PantallaLogin';
import { useFetch } from '@hooks/useFetch';
import { useAuth } from '@hooks/useAuth';
import { useTranslation } from 'react-i18next';

export default function LoginContainer({ navigation }) {
  const { t } = useTranslation();
  const { saveToken } = useAuth();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const { datos, cargando, error } = useFetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombreUsuario, contrasena }),
  });

  useEffect(() => {
    if (datos && datos.jwtToken && datos.refreshToken) {
      saveToken(datos.jwtToken, datos.refreshToken);
      navigation.navigate('HomeScreen');
    }
  }, [datos, navigation, saveToken]);

  return (
    <PantallaLogin
      t={t}
      nombreUsuario={nombreUsuario}
      setNombreUsuario={setNombreUsuario}
      contrasena={contrasena}
      setContrasena={setContrasena}
      handleLogin={() => {}}
      cargando={cargando}
      error={error}
      navigation={navigation}
    />
  );
}