import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@context/ThemeContext';

export default function InsumoItem({ insumo }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.itemContainer}>
      <Text style={estilos.codigo}>{insumo.codigo}</Text>
      <Text style={estilos.nombre}>{insumo.nombre}</Text>
      <Text style={estilos.unidadMedida}>{insumo.unidadMedida}</Text>
      <Text style={estilos.cantidadTotal}>{`${insumo.cantidadTotal} unidades`}</Text>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: theme.colors.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  codigo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  nombre: {
    fontSize: 14,
    color: theme.colors.text,
    marginVertical: 5,
  },
  unidadMedida: {
    fontSize: 12,
    color: theme.colors.textGray,
  },
  cantidadTotal: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});