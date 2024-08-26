import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { estilosGlobales } from '@styles/estilosGlobales';

export default function Boton({ titulo, onPress, estilo }) {
  const estilos = estilosGlobales();

  return (
    <TouchableOpacity style={[estilos.boton, estilo]} onPress={onPress}>
      <Text style={estilos.textoBoton}>{titulo}</Text>
    </TouchableOpacity>
  );
}