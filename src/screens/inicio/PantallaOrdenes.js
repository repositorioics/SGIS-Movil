import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaOrdenes() {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Órdenes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});