import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import EntradaTexto from '@components/EntradaTexto'; // Input para ingresar texto
import Boton from '@components/Boton'; // Botón reutilizable
import DetallesProductoContenedor from '@containers/DetallesProductoContenedor';
import { useTranslation } from 'react-i18next';

export default function PantallaDetallesProducto({ route, navigation }) {
    const { t } = useTranslation();
    const { producto } = route.params;

    const { cantidad, setCantidad, unidad, setUnidad, handleGuardar } = DetallesProductoContenedor({
        producto,
        onActualizacionCompletada: () => {
            Alert.alert(t('exito'), t('producto_actualizado'));
            navigation.navigate('PantallaResumen');
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{producto.nombre}</Text>
            <Text>{t('cantidad_actual')}: {producto.cantidadActual}</Text>
            <EntradaTexto
                placeholder={t('cantidad_recibida')}
                value={cantidad}
                onChangeText={setCantidad}
            />
            <EntradaTexto
                placeholder={t('unidad_medida')}
                value={unidad}
                onChangeText={setUnidad}
            />
            <Boton titulo={t('guardar')} onPress={handleGuardar} />
            <Boton titulo={t('escanear_siguiente')} onPress={() => navigation.navigate('PantallaEscanear')} />
            <Boton titulo={t('finalizar')} onPress={() => navigation.navigate('PantallaResumen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});