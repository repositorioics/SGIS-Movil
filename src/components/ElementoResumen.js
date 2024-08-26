import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@context/ThemeContext';

export default function ElementoResumen({ titulo, valor, nombreIcono, colorIcono }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.overviewItem}>
      <FontAwesome name={nombreIcono} size={24} color={colorIcono} style={estilos.icono} />
      <Text style={estilos.textoTitulo}>{titulo}</Text>
      <Text style={estilos.textoValor}>{valor}</Text>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  overviewItem: {
    backgroundColor: theme.colors.card,
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 5,
  },
  icono: {
    marginBottom: 10,
  },
  textoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 5,
  },
  textoValor: {
    fontSize: 14,
    color: theme.colors.textGray,
  },
});