import React from 'react';
import { View, Text } from 'react-native';
import ImagenPantalla from '../../components/ImagenPantalla';
import Boton from '../../components/Boton';
import { estilosGlobales } from '../../styles/estilosGlobales';
import welcomeImage from '../../../assets/images/bienvenido.png';
import { useTranslation } from 'react-i18next';

export default function PantallaBienvenida({ navigation }) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();

    return (
        <View style={estilos.contenedor}>
            <ImagenPantalla 
                source={welcomeImage} 
                style={{ width: 300, height: 300, marginBottom: 30 }}
            />
            <Text style={[estilos.descripcion, { marginBottom: 40 }]}>{t('optimize_inventory')}</Text>
            <Boton titulo={t('get_started')} onPress={() => navigation.navigate('Login')} />
        </View>
    );
}