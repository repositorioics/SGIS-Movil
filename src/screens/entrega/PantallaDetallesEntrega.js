import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

export default function PantallaDetallesEntrega({ tipoEntrega, insumos, onAddInsumo, onScanBarcode, onRegisterDelivery }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de Entrega: {tipoEntrega}</Text>
      
      <Button title="Agregar Insumo Manualmente" onPress={onAddInsumo} />
      <Button title="Escanear Código de Barras" onPress={onScanBarcode} />

      <FlatList
        data={insumos}
        renderItem={({ item }) => <Text style={styles.insumoItem}>{item.nombre}</Text>}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay insumos agregados</Text>}
      />

      <Button title="Registrar Entrega" onPress={onRegisterDelivery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 20,
  },
  insumoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});