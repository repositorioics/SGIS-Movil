import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BotonOpcion({ icono, texto, onPress, colorIcono, colorTexto }) {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <FontAwesome name={icono} size={24} color={colorIcono} />
      <Text style={[styles.optionText, { color: colorTexto }]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});