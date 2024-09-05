import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@context/ThemeContext';
import { TIPOGRAFIAS } from '@constants/tipografias';

export default function SeccionResumen({ titulo, data, onItemClick, getEstadoEstilo }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const estilos = crearEstilos(theme);

  return (
    <View style={estilos.seccion}>
      <View style={estilos.headerSeccion}>
        <Text style={estilos.tituloSeccion}>{t(titulo)}</Text>
        <TouchableOpacity onPress={() => onItemClick(null)}>
          <Text style={estilos.verMas}>{t('ver_mas')}</Text>
        </TouchableOpacity>
      </View>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={estilos.item} onPress={() => onItemClick(item)}>
          <View>
            <Text style={estilos.codigo}>{t('codigo')}: <Text style={estilos.valor}>{item.codigo}</Text></Text>
            <Text style={estilos.creadoEn}>{t('creado_en')}: <Text style={estilos.valor}>{item.createdAt}</Text></Text>
            <Text style={estilos.creadoPor}>{t('creado_por')}: <Text style={estilos.valor}>{item.creadoPor}</Text></Text>
            <Text style={estilos.sitio}>{t('sitio')}: <Text style={estilos.valor}>{item.sitio}</Text></Text>
          </View>
          <View style={estilos.estado}>
            <Text style={getEstadoEstilo(item.status)}>
              {item.status}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  seccion: {
    padding: 20,
    backgroundColor: theme.colors.card,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerSeccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  verMas: {
    fontSize: 14,
    fontFamily: TIPOGRAFIAS.regular,
    color: theme.colors.link,
    marginVertical: 10,
  },
  item: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8ebe9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estado: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codigo: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  creadoEn: {
    color: theme.colors.textGray,
    fontSize: 12,
    fontWeight: 'bold',
  },
  creadoPor: {
    color: theme.colors.textGray,
    fontSize: 12,
    fontWeight: 'bold',
  },
  sitio: {
    color: theme.colors.textGray,
    fontSize: 12,
    fontWeight: 'bold',
  },
  valor: {
    fontWeight: 'normal',
  },
});