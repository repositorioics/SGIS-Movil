import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PantallaDatosGeneralesEntrega({ tipoEntrega, datosGenerales, onInputChange, onContinue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de entrega: {tipoEntrega}</Text>
      
      <TextInput
        placeholder="Número de Solicitud"
        value={datosGenerales.numeroSolicitud}
        onChangeText={(value) => onInputChange('numeroSolicitud', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="ID de Usuario"
        value={datosGenerales.usuarioId}
        onChangeText={(value) => onInputChange('usuarioId', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="ID de Donante"
        value={datosGenerales.donanteId}
        onChangeText={(value) => onInputChange('donanteId', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="ID de Estado"
        value={datosGenerales.estadoId}
        onChangeText={(value) => onInputChange('estadoId', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Observaciones"
        value={datosGenerales.observaciones}
        onChangeText={(value) => onInputChange('observaciones', value)}
        style={styles.input}
        multiline
      />

      <Button title="Continuar" onPress={onContinue} />
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
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});