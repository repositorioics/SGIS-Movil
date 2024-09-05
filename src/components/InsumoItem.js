import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@context/ThemeContext';

export default function InsumoItem({ insumo }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.container}>
      <View style={estilos.textContainer}>
        <Text style={estilos.codigo}><Text style={estilos.tituloCampo}>Código:</Text> {insumo.codigo}</Text>
        <Text style={estilos.nombre}><Text style={estilos.tituloCampo}>Nombre:</Text> {insumo.nombre}</Text>
        <Text style={estilos.unidadMedida}><Text style={estilos.tituloCampo}>Unidad de Medida:</Text> {insumo.unidadMedida}</Text>
        <Text style={estilos.cantidad}><Text style={estilos.tituloCampo}>Cantidad Total:</Text> {insumo.cantidadTotal} {insumo.unidadMedida}</Text>
      </View>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: theme.colors.card,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8ebe9',
  },
  textContainer: {
    flex: 1,
  },
  codigo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  nombre: {
    fontSize: 14,
    color: theme.colors.textGray,
    marginBottom: 5,
  },
  unidadMedida: {
    fontSize: 12,
    color: theme.colors.textGray,
  },
  cantidad: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 5,
  },
  tituloCampo: {
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});