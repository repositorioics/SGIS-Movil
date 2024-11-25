import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function PantallaSeleccionEntrega({ onSelectOption }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el tipo de entrega:</Text>
      <Button
        title="Entrega (Paleta)"
        onPress={() => onSelectOption('Paleta')}
      />
      <Button
        title="Entrega (Acta de entrega)"
        onPress={() => onSelectOption('Acta de entrega')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});