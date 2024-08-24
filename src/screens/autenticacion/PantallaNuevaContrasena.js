import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '../../components/EntradaTexto';
import Boton from '../../components/Boton';
import Cargando from '../../components/Cargando';
import ImagenPantalla from '../../components/ImagenPantalla';
import { estilosGlobales } from '../../styles/estilosGlobales';
import { validarContrasena, validarContrasenasIguales, validarCamposVacios } from '../../utils/validaciones';
import newPasswordImage from '../../../assets/images/nuevacontra.png';
import { useTranslation } from 'react-i18next';

export default function PantallaNuevaContrasena({
    nuevaContrasena,
    setNuevaContrasena,
    confirmarContrasena,
    setConfirmarContrasena,
    handleReset,
    navigation,
}) {
    const estilos = estilosGlobales();
    const { t } = useTranslation();
    const [error, setError] = useState('');

    const validarInputs = () => {
        if (!validarCamposVacios(nuevaContrasena, confirmarContrasena)) {
            setError(t('fill_all_fields'));
            return false;
        }
        if (!validarContrasena(nuevaContrasena)) {
            setError(t('password_min_length'));
            return false;
        }
        if (!validarContrasenasIguales(nuevaContrasena, confirmarContrasena)) {
            setError(t('passwords_do_not_match'));
            return false;
        }
        setError('');
        return true;
    };

    const onResetPress = () => {
        if (validarInputs()) {
            handleReset();
        } else {
            Alert.alert(t('error'), error);
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20 }]}>
            <ImagenPantalla 
                source={newPasswordImage} 
                style={{ width: 300, height: 300, marginBottom: 30 }}
            />
            <Text style={estilos.descripcion}>{t('reset_password_description')}</Text>
            <EntradaTexto
                placeholder={t('new_password')}
                secureTextEntry
                value={nuevaContrasena}
                onChangeText={setNuevaContrasena}
                estilo={{ marginBottom: 15 }}
            />
            <EntradaTexto
                placeholder={t('confirm_password')}
                secureTextEntry
                value={confirmarContrasena}
                onChangeText={setConfirmarContrasena}
                estilo={{ marginBottom: 20 }}
            />
            {/* {error ? <Text style={estilos.errorText}>{error}</Text> : null} */}
            <Boton titulo={t('submit')} onPress={onResetPress} />
            <Cargando visible={false} />
        </View>
    );
}