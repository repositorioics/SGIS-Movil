import { StyleSheet } from 'react-native';
import { TIPOGRAFIAS } from '@constants/tipografias';
import { useTheme } from '@context/ThemeContext';

export const estilosGlobales = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        contenedor: {
            flex: 1,
            padding: 20,
            backgroundColor: theme.colors.background,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 26,
            backgroundColor: theme.colors.textWhite,
 
        },
        tituloHeader: {
            fontSize: 20,
            fontWeight: '600',
            color: theme.colors.text,
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
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
        },
        textoBoton: {
            color: theme.colors.textWhite,
            fontFamily: TIPOGRAFIAS.medio,
            fontSize: 16,
            fontWeight: 'bold',
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
        resumen: {
            backgroundColor: theme.colors.primary,
            padding: 20,
            borderRadius: 10,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        },
        overviewContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
        },
        overviewItem: {
            backgroundColor: theme.colors.card,
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            marginHorizontal: 5,
        },
        icono: {
            marginBottom: 10,
        },
        textoTitulo: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        textoValor: {
            fontSize: 14,
            color: theme.colors.textGray,
        },
        card: {
            backgroundColor: theme.colors.card,
            padding: 15,
            borderRadius: 10,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            marginBottom: 10,
        },
    });
};