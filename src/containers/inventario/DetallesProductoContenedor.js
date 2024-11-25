import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useFetch } from '@hooks/useFetch';
import { useTranslation } from 'react-i18next';

export default function DetallesProductoContenedor({ producto, onActualizacionCompletada }) {
    const [cantidad, setCantidad] = useState('');
    const [unidad, setUnidad] = useState(''); // Nueva unidad de medida
    const { fetchData, error } = useFetch();
    const { t } = useTranslation();

    const handleGuardar = async () => {
        if (!cantidad || isNaN(cantidad)) {
            Alert.alert(t('error'), t('cantidad_invalida'));
            return;
        }

        const response = await fetchData(`/productos/${producto.id}`, 'PUT', { 
            cantidadRecibida: cantidad,
            unidadMedida: unidad
        });
        if (error) {
            Alert.alert(t('error'), t('error_actualizacion'));
        } else {
            onActualizacionCompletada();
        }
    };

    return {
        cantidad,
        setCantidad,
        unidad,
        setUnidad,
        handleGuardar,
    };
}