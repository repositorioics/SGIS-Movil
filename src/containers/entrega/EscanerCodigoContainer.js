import React, { useState, useEffect } from 'react';
import PantallaEscanerCodigo from '../../screens/entrega/PantallaEscanerCodigo';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTheme } from '../../context/ThemeContext';

export default function EscanerCodigoContainer({ navigation }) {
  const { setInsumoEscaneado } = useTheme();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    const insumoMock = {
      id: Date.now(),
      nombre: `Insumo escaneado ${data}`,
      codigo: data,
      cantidad: 1,
    };
    setInsumoEscaneado(insumoMock);
    navigation.goBack();
  };

  return (
    <PantallaEscanerCodigo
      hasPermission={hasPermission}
      scanned={scanned}
      onBarcodeScanned={handleBarcodeScanned}
      resetScan={() => setScanned(false)}
    />
  );
}