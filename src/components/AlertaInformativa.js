// components/AlertaInformativa.js
import React from 'react';
import { AlertNotificationRoot, ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useTheme } from '@context/ThemeContext';

export const AlertaInformativa = ({ tipo = 'info', titulo, mensaje }) => {
  const { theme } = useTheme();

  const mostrarAlerta = () => {
    Toast.show({
      type: tipo, // puede ser success, error, info, warning
      title: titulo,
      textBody: mensaje,
      textBodyStyle: { color: theme.colors.text },
      titleStyle: { color: theme.colors.primary },
    });
  };

  return (
    <AlertNotificationRoot>
      {mostrarAlerta()}
    </AlertNotificationRoot>
  );
};