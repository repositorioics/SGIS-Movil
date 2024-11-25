import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import BotonOpcion from '@components/BotonOpcion';

export default function PantallaConfiguracion({ opciones }) {
  const { theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      {opciones.map((opcion, index) => (
        <BotonOpcion
          key={index}
          icono={opcion.icono}
          texto={opcion.texto}
          onPress={opcion.onPress}
          colorIcono={theme.colors.primary}
          colorTexto={opcion.colorTexto || theme.colors.text} // Color opcional
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
});