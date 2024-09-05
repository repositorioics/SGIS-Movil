import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';
import ICONOS from '@constants/iconos';

export default function FiltroCategoria({ onFilter }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={() => onFilter('Equipo')} style={estilos.categoriaButton}>
        <FontAwesome name={ICONOS.equipo.icono} size={16} color={ICONOS.equipo.color} />
        <Text style={estilos.categoriaText}>Equipo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onFilter('Materiales')} style={estilos.categoriaButton}>
        <FontAwesome name={ICONOS.materiales.icono} size={16} color={ICONOS.materiales.color} />
        <Text style={estilos.categoriaText}>Materiales</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onFilter('Reactivos')} style={estilos.categoriaButton}>
        <FontAwesome name={ICONOS.reactivos.icono} size={16} color={ICONOS.reactivos.color} />
        <Text style={estilos.categoriaText}>Reactivos</Text>
      </TouchableOpacity>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  categoriaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  categoriaText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});