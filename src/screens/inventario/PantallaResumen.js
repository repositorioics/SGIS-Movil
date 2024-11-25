import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function PantallaResumen({ route, navigation }) {
    const { t } = useTranslation();
    const { productosActualizados } = route.params;

    const guardarEnInventario = () => {
        // Lógica para guardar los productos en la base de datos
        // Aquí podrías realizar la llamada a la API para guardar los datos
        console.log('Guardando productos en inventario...');
        navigation.navigate('PantallaConfirmacion');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{t('resumen')}</Text>
            <FlatList
                data={productosActualizados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.producto}>
                        <Text>{t('producto')}: {item.nombre}</Text>
                        <Text>{t('cantidad_recibida')}: {item.cantidadRecibida}</Text>
                        <Text>{t('unidad_medida')}: {item.unidadMedida}</Text>
                    </View>
                )}
            />
            <Boton titulo={t('guardar_inventario')} onPress={guardarEnInventario} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    producto: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});