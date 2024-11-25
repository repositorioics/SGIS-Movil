import React, { useEffect, useState } from 'react';
import PantallaDetallesEntrega from '@screens/entrega/PantallaDetallesEntrega';
import { useTheme } from '../../context/ThemeContext';

export default function DetallesEntregaContainer({ route, navigation }) {
  const [insumos, setInsumos] = useState([]);
  const { tipoEntrega, datosGenerales } = route.params;
  const { insumoEscaneado, setInsumoEscaneado } = useTheme();

  useEffect(() => {
    if (insumoEscaneado) {
      setInsumos([...insumos, insumoEscaneado]);
      setInsumoEscaneado(null); // Limpia el insumo después de agregarlo
    }
  }, [insumoEscaneado]);

  const handleScanBarcode = () => {
    navigation.navigate('EscanerCodigo');
  };

  const handleRegisterDelivery = () => {
    console.log("Datos Generales:", datosGenerales);
    console.log("Insumos para entrega:", insumos);
    alert("Entrega registrada exitosamente.");
  };

  return (
    <PantallaDetallesEntrega
      tipoEntrega={tipoEntrega}
      insumos={insumos}
      onAddInsumo={() => {}}
      onScanBarcode={handleScanBarcode}
      onRegisterDelivery={handleRegisterDelivery}
    />
  );
}