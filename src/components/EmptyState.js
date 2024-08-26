// src/components/EmptyState.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@context/ThemeContext';

export default function EmptyState({ imageSource, titleKey, descriptionKey }) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image 
        source={imageSource} 
        style={styles.image}
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>{t(titleKey)}</Text>
      <Text style={[styles.description, { color: theme.colors.textGray }]}>
        {t(descriptionKey)}
      </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});