import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '../../components/EntradaTexto';
import Boton from '../../components/Boton';
import Cargando from '../../components/Cargando';
import ImagenPantalla from '../../components/ImagenPantalla';
import { estilosGlobales } from '../../styles/estilosGlobales';
import { validarEmail, validarCamposVacios } from '../../utils/validaciones';
import resetPasswordImage from '../../../assets/images/recuperarcontra.png';
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
        if (!validarCamposVacios(email)) {
            setError(t('fill_all_fields'));
            return false;
        }
        if (!validarEmail(email)) {
            setError(t('invalid_email'));
            return false;
        }
        setError('');
        return true;
    };

    const onRecuperarPress = () => {
        if (validarInputs()) {
            handleRecuperar();
        } else {
            Alert.alert(t('error'), error)
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20 }]}>
            <ImagenPantalla 
                source={resetPasswordImage} 
                style={{ width: 300, height: 300, marginBottom: 30 }}
            />
            <Text style={estilos.descripcion}>{t('recover_password_description')}</Text>
            <EntradaTexto
                placeholder={t('email')}
                value={email}
                onChangeText={setEmail}
                estilo={{ marginBottom: 20 }}
            />
            {/* {error ? <Text style={estilos.errorText}>{error}</Text> : null} */}
            <Boton titulo={t('submit')} onPress={onRecuperarPress} />
            <Cargando visible={false} />
        </View>
    );
}