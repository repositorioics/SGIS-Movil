import React from 'react';
import { View, Text } from 'react-native';
import ImagenPantalla from '@components/ImagenPantalla';
import Boton from '@components/Boton';
import { estilosGlobales } from '@styles/estilosGlobales';
import welcomeImage from '@assets/images/bienvenido.png';
import { useTranslation } from 'react-i18next';

export default function PantallaBienvenida({ navigation }) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20, display:'flex', alignItems:'center', justifyContent:'flex-start' }]}>
            <ImagenPantalla 
                source={welcomeImage} 
                style={{ width: 300, height: 300, marginBottom: 5 }}
            />
            <View>
            <Text style={[estilos.titulo]}>{t('bienvenido')}</Text>
            <Text style={[estilos.descripcion, { marginBottom: 40 }]}>{t('optimiza_inventario')}</Text>
            <Boton titulo={t('comenzar')} onPress={() => navigation.navigate('Internacionalizacion')} />
            </View>
        </View>
    );
}