import React, { useState } from 'react';
import PantallaDatosGeneralesEntrega from '@screens/entrega/PantallaDatosGeneralesEntrega';

export default function DatosGeneralesEntregaContainer({ route, navigation }) {
  const { tipoEntrega } = route.params;
  const [datosGenerales, setDatosGenerales] = useState({
    numeroSolicitud: '',
    usuarioId: '',
    donanteId: '',
    estadoId: '',
    observaciones: '',
  });

  const handleContinuar = () => {
    navigation.navigate('DetallesEntrega', { tipoEntrega, datosGenerales });
  };

  const handleInputChange = (field, value) => {
    setDatosGenerales({ ...datosGenerales, [field]: value });
  };

  return (
    <PantallaDatosGeneralesEntrega
      tipoEntrega={tipoEntrega}
      datosGenerales={datosGenerales}
      onInputChange={handleInputChange}
      onContinue={handleContinuar}
    />
  );
}