import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boton from '@components/Boton';
import EntradaTexto from '@components/EntradaTexto';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function PantallaCambiarContrasena({
  nuevaContrasena,
  setNuevaContrasena,
  confirmarContrasena,
  setConfirmarContrasena,
  onCambiarContrasena,
  cargando,
  error,
}) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>{t('nueva_contrasena')}</Text>
      <EntradaTexto
        value={nuevaContrasena}
        onChangeText={setNuevaContrasena}
        secureTextEntry
        placeholder={t('nueva_contrasena')}
        estilo={styles.input}
      />

      <Text style={[styles.label, { color: theme.colors.text }]}>{t('confirmar_contrasena')}</Text>
      <EntradaTexto
        value={confirmarContrasena}
        onChangeText={setConfirmarContrasena}
        secureTextEntry
        placeholder={t('confirmar_contrasena')}
        estilo={styles.input}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Boton
        titulo={cargando ? t('cambiando') : t('cambiar_contrasena')}
        onPress={onCambiarContrasena}
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