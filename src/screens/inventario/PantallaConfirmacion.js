import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function PantallaConfirmacion({ navigation }) {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{t('productos_guardados_exito')}</Text>
            <Button title={t('volver_escanear')} onPress={() => navigation.navigate('PantallaEscanear')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});