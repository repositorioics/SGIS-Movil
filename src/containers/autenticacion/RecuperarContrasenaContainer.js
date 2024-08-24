// containers/RecuperarContrasenaContainer.js
import React, { useState, useEffect } from 'react';
import PantallaRecuperarContrasena from '../../screens/autenticacion/PantallaRecuperarContrasena';
import { useFetch } from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';

export default function RecuperarContrasenaContainer({ navigation }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const { datos, cargando, error } = useFetch('/api/recover-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  useEffect(() => {
    if (datos) {
      console.log('Enlace de recuperación enviado a:', email);
      navigation.navigate('OTP');
    }
  }, [datos, navigation]);

  return (
    <PantallaRecuperarContrasena
      t={t}
      email={email}
      setEmail={setEmail}
      handleRecuperar={() => {}}
      cargando={cargando}
      error={error}
      navigation={navigation}
    />
  );
}