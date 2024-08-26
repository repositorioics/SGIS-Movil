import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@context/ThemeContext';

const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

export default function FiltroCategoria({ onFilter }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    onFilter(categoria);
  };

  return (
    <View style={estilos.filtroContainer}>
      {categorias.map((categoria, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            estilos.botonCategoria, 
            categoriaSeleccionada === categoria && estilos.botonCategoriaSeleccionado
          ]}
          onPress={() => seleccionarCategoria(categoria)}
        >
          <Text style={estilos.textoCategoria}>{categoria}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  filtroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  botonCategoria: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.textGray,
  },
  botonCategoriaSeleccionado: {
    backgroundColor: theme.colors.primary,
  },
  textoCategoria: {
    color: theme.colors.text,
  },
});