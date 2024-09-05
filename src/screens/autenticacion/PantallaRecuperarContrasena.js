import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '@components/EntradaTexto';
import Boton from '@components/Boton';
import Cargando from '@components/Cargando';
import ImagenPantalla from '@components/ImagenPantalla';
import { estilosGlobales } from '@styles/estilosGlobales';
import { validarEmail, validarCamposVacios } from '@utils/validaciones';
import resetPasswordImage from '@assets/images/recuperarcontra.png';
import { useTranslation } from 'react-i18next';

export default function PantallaRecuperarContrasena({
    email,
    setEmail,
    handleRecuperar,
    navigation,
}) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();
    const [error, setError] = useState('');

    const validarInputs = () => {
        if (!validarEmail(email)) {
            setError(t('correo_invalido'));
            return false;
        }
        if (!validarCamposVacios(email)) {
            setError(t('llenar_todos_los_campos'));
            return false;
        }
        setError('');
        return true;
    };

    const onRecuperarPress = () => {
        if (validarInputs()) {
            handleRecuperar();
        } else {
            Alert.alert(t('error'), error);
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20, display:'flex', alignItems:'center', justifyContent:'flex-start' }]}>
            <ImagenPantalla 
                source={resetPasswordImage} 
                style={{ width: 300, height: 300, marginBottom: 5 }}
            />
            <View>
                <Text style={estilos.titulo}>{t('recuperar_contrasena')}</Text>
                <Text style={estilos.descripcion}>{t('descripcion_recuperar_contrasena')}</Text>
                <EntradaTexto
                    placeholder={t('correo_invalido')}
                    secureTextEntry
                    value={email}
                    onChangeText={setEmail}
                    estilo={{ marginBottom: 20 }}
                />
                <Boton titulo={t('enviar')} onPress={onRecuperarPress} />
                <Cargando visible={false} />
            </View>
        </View>
    );
}