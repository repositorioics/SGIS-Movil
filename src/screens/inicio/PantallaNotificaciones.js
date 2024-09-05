import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';
import ImagenPantalla from '@components/ImagenPantalla';
import sinNotificaciones from '@assets/images/sinNotificaciones.png';
import { FontAwesome } from '@expo/vector-icons';
import ICONOS from '@constants/iconos';

export default function PantallaNotificaciones({ notificaciones, handleNotificationClick }) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const renderNotificacion = ({ item }) => {
    const configuracion = ICONOS[item.tipo] || {};
    return (
      <TouchableOpacity
        style={[styles.notificacion, { backgroundColor: theme.colors.card }]}
        onPress={() => handleNotificationClick(item)}
      >
        <FontAwesome name={configuracion.icono} size={24} color={configuracion.color} style={styles.icono} />
        <View style={styles.contenido}>
          <Text style={[styles.titulo, { color: theme.colors.text }]}>{item.titulo}</Text>
          <Text style={[styles.descripcion, { color: theme.colors.textGray }]}>{item.descripcion}</Text>
        </View>
        <Text style={[styles.horaMinutos, { color: theme.colors.textGray }]}>{item.horaMinutos} {t('hora')}</Text>
      </TouchableOpacity>
    );
  };

  const renderFecha = ({ item }) => (
    <View style={styles.seccionFecha}>
      <Text style={[styles.fecha, { color: theme.colors.primary }]}>{item.fecha}</Text>
      <FlatList
        data={item.notificaciones}
        renderItem={renderNotificacion}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );

  const data = Object.keys(notificaciones).map(fecha => ({
    fecha,
    notificaciones: notificaciones[fecha],
  }));

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={data}
        renderItem={renderFecha}
        keyExtractor={item => item.fecha}
        contentContainerStyle={styles.listaNotificaciones}
        ListEmptyComponent={() => (
          <View style={styles.emptyStateContainer}>
            <Text style={[styles.emptyStateText, { color: theme.colors.textGray }]}>{t('sin_notificaciones')}</Text>
            <ImagenPantalla source={sinNotificaciones} style={{ width: 300, height: 300, marginBottom: 5 }}/>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  listaNotificaciones: {
    paddingVertical: 20,
  },
  notificacion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8ebe9',
  },
  icono: {
    marginRight: 15,
  },
  contenido: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    marginTop: 5,
  },
  horaMinutos: {
    fontSize: 12,
    marginLeft: 10,
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
  seccionFecha: {
    marginBottom: 20,
  },
  fecha: {
    fontSize: 18,
    marginBottom: 10,
  },
});