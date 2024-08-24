import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Cargando = ({ visible, color }) => {
  if (!visible) return null;

  return (
    <View style={styles.cargando}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  cargando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cargando;