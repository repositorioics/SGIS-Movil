import React, { useState, useEffect } from 'react';
import PantallaConfiguracion from '@screens/configuracion/PantallaConfiguracion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@hooks/useAuth';
import { useTheme } from '@context/ThemeContext';
import cambiarIdioma, { loadLanguage } from '@components/CambiarIdioma';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function ConfiguracionContainer({ navigation }) {
  const { t, i18n } = useTranslation();
  const { clearToken } = useAuth();
  const { toggleTheme, theme, isDarkMode } = useTheme();

  // Estados para almacenar el idioma
  const [idioma, setIdioma] = useState(i18n.language);

  // Cargar idioma guardado al cargar la aplicación
  useEffect(() => {
    const cargarIdioma = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setIdioma(savedLanguage);
        cambiarIdioma(savedLanguage);
      }
    };
    cargarIdioma();
  }, []);

  const manejarCerrarSesion = () => {
    clearToken();
    navigation.navigate('IniciarSesion');
  };

  const cambiarIdiomaSeleccion = async (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    await AsyncStorage.setItem('language', nuevoIdioma); // Guardar el idioma en AsyncStorage
    cambiarIdioma(nuevoIdioma); // Cambiar idioma con i18n
  };

  const opciones = [
    {
      icono: 'user',
      texto: t('editar_perfil'),
      onPress: () => navigation.navigate('EditarPerfil'),
    },
    {
      icono: 'lock',
      texto: t('cambiar_contrasena'),
      onPress: () => navigation.navigate('CambiarContrasena'),
    },
    {
      icono: 'language',
      texto: t('lenguaje'),
      onPress: () => cambiarIdiomaSeleccion(idioma === 'es' ? 'en' : 'es'), // Alternar idioma
    },
    {
      icono: isDarkMode ? 'sun-o' : 'moon-o', // Cambiar el ícono según el modo
      texto: t('tema'),
      onPress: () => toggleTheme(), // Alternar tema
    },
    {
      icono: 'sign-out',
      texto: t('cerrar_sesion'),
      onPress: manejarCerrarSesion,
      colorTexto: 'red',
    },
  ];

  return <PantallaConfiguracion opciones={opciones} />;
}