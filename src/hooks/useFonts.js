import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
          'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
          'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts', error);
      }
    }
  
    loadFonts();
  }, []);  

  return fontsLoaded;
}