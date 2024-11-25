import React, { useState } from 'react';
import PantallaCambiarContrasena from '@screens/configuracion/PantallaCambiarContrasena';
import { useFetch } from '@hooks/useFetch';

export default function CambiarContrasenaContainer({ navigation }) {
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const { fetchData, cargando, error } = useFetch();

  const handleCambiarContrasena = async () => {
    if (nuevaContrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    await fetchData('/api/cambiar-contrasena', {
      method: 'POST',
      body: JSON.stringify({ nuevaContrasena }),
    });

    if (!error) {
      navigation.goBack();
    }
  };

  return (
    <PantallaCambiarContrasena
      nuevaContrasena={nuevaContrasena}
      setNuevaContrasena={setNuevaContrasena}
      confirmarContrasena={confirmarContrasena}
      setConfirmarContrasena={setConfirmarContrasena}
      onCambiarContrasena={handleCambiarContrasena}
      cargando={cargando}
      error={error}
    />
  );
}