import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boton from '@components/Boton';
import EntradaTexto from '@components/EntradaTexto';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function PantallaEditarPerfil({
  nombreUsuario,
  setNombreUsuario,
  nombreCompleto,
  setNombreCompleto,
  email,
  setEmail,
  onGuardarCambios,
  cargando,
  error,
}) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>{t('nombre_usuario')}</Text>
      <EntradaTexto
        value={nombreUsuario}
        onChangeText={setNombreUsuario}
        placeholder={t('nombre_usuario')}
        estilo={styles.input}
      />

      <Text style={[styles.label, { color: theme.colors.text }]}>{t('nombre_completo')}</Text>
      <EntradaTexto
        value={nombreCompleto}
        onChangeText={setNombreCompleto}
        placeholder={t('nombre_completo')}
        estilo={styles.input}
      />

      <Text style={[styles.label, { color: theme.colors.text }]}>{t('correo_electronico')}</Text>
      <EntradaTexto
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder={t('correo_electronico')}
        estilo={styles.input}
      />

      {/* {error && <Text style={styles.error}>{error}</Text>} */}

      <Boton
        titulo={cargando ? t('guardando') : t('guardar_cambios')}
        onPress={onGuardarCambios}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
});