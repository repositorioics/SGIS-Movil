
import React from 'react';
import { View } from 'react-native';
import useFonts from './src/hooks/useFonts';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import AppNavegacion from './src/navigation/AppNavegacion';
import Cargando from './src/components/Cargando';
import './src/i18n';

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    const defaultColor = '#7871F8';
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Cargando visible={true} color={defaultColor} />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { theme } = useTheme();

  return (
    <AppNavegacion />
  );
};