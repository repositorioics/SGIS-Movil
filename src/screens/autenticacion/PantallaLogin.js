import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '../../components/EntradaTexto';
import Boton from '../../components/Boton';
import Cargando from '../../components/Cargando';
import ImagenPantalla from '../../components/ImagenPantalla';
import { estilosGlobales } from '../../styles/estilosGlobales';
import { validarCamposVacios } from '../../utils/validaciones';
import { useTheme } from '../../context/ThemeContext';
import loginImage from '../../../assets/images/iniciosesion.png';
import { useTranslation } from 'react-i18next';

export default function PantallaLogin({
    nombreUsuario,
    setNombreUsuario,
    contrasena,
    setContrasena,
    handleLogin,
    cargando,
    navigation,
}) {
    const { theme } = useTheme();
    const estilos = estilosGlobales(theme);
    const { t } = useTranslation();

    const [error, setError] = useState('');

    const validarInputs = () => {
        if (!validarCamposVacios(nombreUsuario, contrasena)) {
            setError(t('fill_all_fields'));
            return false;
        }
        setError('');
        return true;
    };

    const onLoginPress = () => {
        if (validarInputs()) {
            handleLogin();
        } else {
            Alert.alert(t('error'), t('fill_all_fields'));
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20 }]}>
            <ImagenPantalla 
                source={loginImage} 
                style={{ width: 300, height: 300, marginBottom: 5 }}
            />
            <Text style={estilos.descripcion}>{t('login_description')}</Text>
            <EntradaTexto
                placeholder={t('username')}
                value={nombreUsuario}
                onChangeText={setNombreUsuario}
                estilo={{ marginBottom: 15 }}
            />
            <EntradaTexto
                placeholder={t('password')}
                secureTextEntry
                value={contrasena}
                onChangeText={setContrasena}
                estilo={{ marginBottom: 5 }}
            />
            <Text
                style={[estilos.link, { color: theme.colors.primary, textAlign: 'right', marginBottom: 20 }]}
                onPress={() => navigation.navigate('RecuperarContrasena')}
            >
                {t('forgot_password')}?
            </Text>
            {/* {error ? <Text style={estilos.errorText}>{error}</Text> : null} */}
            <Boton titulo={t('login')} onPress={onLoginPress} />
            <Cargando visible={cargando} />
        </View>
    );
}