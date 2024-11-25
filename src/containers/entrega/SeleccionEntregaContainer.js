import React from 'react';
import PantallaSeleccionEntrega from '@screens/entrega/PantallaSeleccionEntrega';

export default function SeleccionEntregaContainer({ navigation }) {
  const handleOptionSelect = (tipoEntrega) => {
    // Navegar a la pantalla de datos generales de entrega pasando el tipo de entrega seleccionado
    navigation.navigate('DatosGenerales', { tipoEntrega });
  };

  return (
    <PantallaSeleccionEntrega onSelectOption={handleOptionSelect} />
  );
}