import i18n from '../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cambiarIdioma = async (nuevoIdioma) => {
  i18n.changeLanguage(nuevoIdioma);
  await AsyncStorage.setItem('language', nuevoIdioma); // Save the language
};

// Load the language when the app starts
export const loadLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem('language');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }
};

export default cambiarIdioma;