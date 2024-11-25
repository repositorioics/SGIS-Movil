import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BarraBusqueda from '@components/BarraBusqueda';
import FiltroCategoria from '@components/FiltroCategoria';
import InsumoItem from '@components/InsumoItem';
import { useTheme } from '@context/ThemeContext';
import ImagenPantalla from '@components/ImagenPantalla';
import sinInsumos from '@assets/images/sinInsumos.png';
import { useTranslation } from 'react-i18next';

export default function PantallaInventario({ insumos, onSearch, onFilter }) {
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <InsumoItem insumo={item} />
  );

  return (
    <View style={[estilos.contenedor, { backgroundColor: theme.colors.background }]}>
      <BarraBusqueda onSearch={onSearch} />
      <FiltroCategoria onFilter={onFilter} />
      <FlatList
        data={insumos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={estilos.listaInsumos}
        ListEmptyComponent={() => (
          <View style={estilos.emptyStateContainer}>
            <Text style={[estilos.emptyStateText, { color: theme.colors.textGray }]}>{t('sin_insumo')}</Text>
            <ImagenPantalla source={sinInsumos} 
                style={{ width: 300, height: 300, marginBottom: 5 }}/>
            
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background50,
  },
  listaInsumos: {
    marginTop: 20,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 18,
    textAlign: 'center',
  },
});