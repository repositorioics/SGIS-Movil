import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function PantallaNotificaciones({ notificaciones, handleNotificationClick }) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const renderNotificacion = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificacion, { backgroundColor: theme.colors.card }]}
      onPress={() => handleNotificationClick(item)}
    >
      <Text style={[styles.titulo, { color: theme.colors.text }]}>{item.titulo}</Text>
      <Text style={[styles.descripcion, { color: theme.colors.textGray }]}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

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
          </View>
        )}
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para sombras en Android
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    marginTop: 5,
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