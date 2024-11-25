import React, { useState, useEffect } from 'react';
import PantallaEditarPerfil from '@screens/configuracion/PantallaEditarPerfil';
import { useFetch } from '@hooks/useFetch';
import { useAuth } from '@hooks/useAuth';
import { validarEmail, validarCamposVacios } from '@utils/validaciones';

export default function EditarPerfilContainer({ navigation }) {
  const { fetchData, datos, cargando, error } = useFetch();
  const { usuario, actualizarUsuario } = useAuth();

  const [nombreUsuario, setNombreUsuario] = useState(usuario?.nombreUsuario || '');
  const [nombreCompleto, setNombreCompleto] = useState(usuario?.nombreCompleto || '');
  const [email, setEmail] = useState(usuario?.email || '');
  const [errorValidacion, setErrorValidacion] = useState('');

  useEffect(() => {
    if (datos) {
      actualizarUsuario(datos);
      navigation.goBack(); 
    }
  }, [datos]);

  const handleGuardarCambios = async () => {
    if (!validarCamposVacios(nombreUsuario, nombreCompleto, email)) {
      setErrorValidacion('Por favor llena todos los campos.');
      return;
    }

    if (!validarEmail(email)) {
      setErrorValidacion('Correo electrónico inválido.');
      return;
    }

    await fetchData('/api/perfil/actualizar', {
      method: 'POST',
      body: JSON.stringify({ nombreUsuario, nombreCompleto, email }),
    });
  };

  return (
    <PantallaEditarPerfil
      nombreUsuario={nombreUsuario}
      setNombreUsuario={setNombreUsuario}
      nombreCompleto={nombreCompleto}
      setNombreCompleto={setNombreCompleto}
      email={email}
      setEmail={setEmail}
      onGuardarCambios={handleGuardarCambios}
      cargando={cargando}
      error={error || errorValidacion}
    />
  );
}