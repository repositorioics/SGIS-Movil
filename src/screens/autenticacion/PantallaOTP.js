import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '../../components/EntradaTexto';
import Boton from '../../components/Boton';
import Cargando from '../../components/Cargando';
import ImagenPantalla from '../../components/ImagenPantalla';
import { estilosGlobales } from '../../styles/estilosGlobales';
import { validarCodigoOTP, validarCamposVacios } from '../../utils/validaciones';
import { useTranslation } from 'react-i18next';
import otpImage from '../../../assets/images/otp.png';

export default function PantallaOTP({
    codigoOTP,
    setCodigoOTP,
    handleVerify,
    navigation,
}) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();
    const [error, setError] = useState('');

    const validarInputs = () => {
        if (!validarCamposVacios(codigoOTP)) {
            setError(t('fill_all_fields'));
            return false;
        }
        if (!validarCodigoOTP(codigoOTP)) {
            setError(t('invalid_otp'));
            return false;
        }
        setError('');
        return true;
    };

    const onVerifyPress = () => {
        if (validarInputs()) {
            handleVerify();
        } else {
            Alert.alert(t('error'), error);
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20 }]}>
            <ImagenPantalla 
                source={otpImage} 
                style={{ width: 300, height: 300, marginBottom: 20 }} 
            />
            <Text style={estilos.descripcion}>{t('otp_description')}</Text>
            <EntradaTexto
                placeholder={t('otp_code')}
                value={codigoOTP}
                onChangeText={setCodigoOTP}
                estilo={{ marginBottom: 20 }}
                error={error}
            />
            <Boton titulo={t('verify')} onPress={onVerifyPress} />
            <Cargando visible={false} />
        </View>
    );
}