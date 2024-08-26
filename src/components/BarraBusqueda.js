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
    backgroundColor: theme.colors.background,
    borderRadius: 30,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  searchInput: {
    flex: 1,
    color: theme.colors.text,
    paddingHorizontal:16,

  },
  searchIconContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon:{
    padding:8,
  }
});