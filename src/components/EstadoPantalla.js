import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function EstadoPantalla({ imageSource, titleKey, descriptionKey }) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={[styles.title, { color: theme.colors.text }]}>{t(titleKey)}</Text>
      <Text style={[styles.description, { color: theme.colors.textGray }]}>{t(descriptionKey)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});