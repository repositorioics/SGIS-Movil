import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@context/ThemeContext';
import { TIPOGRAFIAS } from '@constants/tipografias';

const ErrorMessage = ({ error }) => {
  const { theme } = useTheme();

  if (!error) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.notification }]}>
      <Text style={[styles.errorText, { color: theme.colors.text }]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: TIPOGRAFIAS.medio,
  },
});

export default ErrorMessage;