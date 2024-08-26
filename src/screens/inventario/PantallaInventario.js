import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BarraBusqueda from '@components/BarraBusqueda';
import FiltroCategoria from '@components/FiltroCategoria';
import InsumoItem from '@components/InsumoItem';
import { useTheme } from '@context/ThemeContext';

export default function PantallaInventario({ insumos, onSearch, onFilter }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  const renderItem = ({ item }) => (
    <InsumoItem insumo={item} />
  );

  return (
    <View style={estilos.container}>
      <BarraBusqueda onSearch={onSearch} />
      <FiltroCategoria onFilter={onFilter} />
      <FlatList
        data={insumos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={estilos.listaInsumos}
      />
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  listaInsumos: {
    marginTop: 20,
  },
});