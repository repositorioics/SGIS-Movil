// containers/OTPContainer.js
import React, { useState, useEffect } from 'react';
import PantallaOTP from '../../screens/autenticacion/PantallaOTP';
import { useFetch } from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';

export default function OTPContainer({ navigation }) {
  const { t } = useTranslation();
  const [codigoOTP, setCodigoOTP] = useState('');

  const { datos, cargando, error } = useFetch('/api/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ codigoOTP }),
  });

  useEffect(() => {
    if (datos) {
      console.log('Código OTP verificado:', datos);
      navigation.navigate('RecuperarContrasena');
    }
  }, [datos, navigation]);

  return (
    <PantallaOTP
      t={t}
      codigoOTP={codigoOTP}
      setCodigoOTP={setCodigoOTP}
      handleVerify={() => {}}
      cargando={cargando}
      error={error}
      navigation={navigation}
    />
  );
}