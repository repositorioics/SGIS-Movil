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
    // Puedes usar un color predeterminado para la pantalla de carga
    const defaultColor = '#7871F8'; // un color de tu elección
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
  const { theme } = useTheme(); // Ahora puedes usar useTheme aquí

  return (
    <AppNavegacion />
  );
};