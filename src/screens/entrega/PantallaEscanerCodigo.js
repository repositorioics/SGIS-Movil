import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function PantallaEscanerCodigo({ hasPermission, scanned, onBarcodeScanned, resetScan }) {
  if (hasPermission === null) {
    return <Text>Solicitando permiso de cámara...</Text>;
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No tienes acceso a la cámara.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : onBarcodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr, BarCodeScanner.Constants.BarCodeType.code128]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.buttonContainer}>
          <Button title="Escanear de nuevo" onPress={resetScan} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
});