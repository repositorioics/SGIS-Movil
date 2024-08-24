import { StyleSheet } from 'react-native';
import { TIPOGRAFIAS } from '../constants/tipografias';
import { useTheme } from '../context/ThemeContext';

export const estilosGlobales = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        contenedor: {
            flex: 1,
            padding: 20,
            backgroundColor: theme.colors.background,
        },
        titulo: {
            fontSize: 24,
            fontFamily: TIPOGRAFIAS.semiNegrita,
            color: theme.colors.text,
            marginBottom: 10,
        },
        descripcion: {
            fontSize: 16,
            fontFamily: TIPOGRAFIAS.regular,
            color: theme.colors.textGray,
            marginBottom: 20,
        },
        boton: {
            backgroundColor: theme.colors.primary,
            paddingVertical: 15,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textoBoton: {
            color: theme.colors.textWhite,
            fontFamily: TIPOGRAFIAS.medio,
            fontSize: 16,
            fontWeight:'bold',
        },
        textoGeneral: {
            fontSize: 16,
            fontFamily: TIPOGRAFIAS.regular,
            color: theme.colors.textgray,
        },
        link: {
            fontSize: 14,
            fontFamily: TIPOGRAFIAS.regular,
            color: theme.colors.link,
            marginVertical: 10,
        },
        errorText: {
            color: theme.colors.error,
            fontSize: 14,
            marginTop: 5,
            fontFamily: TIPOGRAFIAS.regular,
        },
    });
};