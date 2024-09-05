import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagenPantalla from '@components/ImagenPantalla';
import { estilosGlobales } from '@styles/estilosGlobales';
import languageImage from '@assets/images/idioma.png';
import { useTranslation } from 'react-i18next';
import CambiarIdioma from '@components/CambiarIdioma';

export default function PantallaInternacionalizacion({ navigation }) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();

    const continuar = (idioma) => {
        CambiarIdioma(idioma);
        navigation.navigate('IniciarSesion');
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
            <ImagenPantalla 
                source={languageImage} 
                style={{ width: 300, height: 300, marginBottom: 20 }}
            />
            <Text style={[estilos.titulo]}>{t('seleccionar_idioma')}</Text>
            <Text style={[estilos.descripcion, { textAlign: 'center', marginBottom: 40 }]}>
                {t('seleccionar_idioma_descripcion')}
            </Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => continuar('es')} style={[estilos.boton, { width: '40%' }]}>
                    <Text style={estilos.textoBoton}>Español</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => continuar('en')} style={[estilos.boton, { width: '40%' }]}>
                    <Text style={estilos.textoBoton}>English</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}