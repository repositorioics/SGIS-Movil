// containers/NuevaContrasenaContainer.js
import React, { useState, useEffect } from 'react';
import PantallaNuevaContrasena from '../../screens/autenticacion/PantallaNuevaContrasena';
import { useFetch } from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';

export default function NuevaContrasenaContainer({ navigation }) {
  const { t } = useTranslation();
  const { token } = useAuth();
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const { datos, cargando, error } = useFetch('/api/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nuevaContrasena, confirmarContrasena }),
  });

  useEffect(() => {
    if (datos) {
      console.log('Contraseña restablecida con éxito:', datos);
      navigation.navigate('LoginScreen');
    }
  }, [datos, navigation]);

  return (
    <PantallaNuevaContrasena
      t={t}
      nuevaContrasena={nuevaContrasena}
      setNuevaContrasena={setNuevaContrasena}
      confirmarContrasena={confirmarContrasena}
      setConfirmarContrasena={setConfirmarContrasena}
      handleReset={() => {}}
      cargando={cargando}
      error={error}
      navigation={navigation}
    />
  );
}