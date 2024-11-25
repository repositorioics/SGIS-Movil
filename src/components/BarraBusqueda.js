import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@context/ThemeContext';

export default function BarraBusqueda({ onSearch }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.searchBar}>
      <TextInput 
        placeholder="Buscar insumos..."
        placeholderTextColor={theme.colors.textGray}
        style={estilos.searchInput}
      />
      <TouchableOpacity onPress={onSearch} style={estilos.searchIconContainer}>
        <FontAwesome name="search" size={18} color="#fff" style={estilos.searchIcon}/>
      </TouchableOpacity>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    gap:7,
    backgroundColor: theme.colors.background,
    borderRadius: 8,  // Grosor del borde aumentado para mayor visibilidad
    borderColor: '#B0B0B0', // Color de borde más oscuro para mayor contraste
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    color: theme.colors.text,
    paddingHorizontal: 16,
    borderWidth: 0.3,
    borderRadius: 8,
    paddingVertical:10,
  },
  searchIconContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 8,
  },
});