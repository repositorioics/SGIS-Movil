import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import EntradaTexto from '@components/EntradaTexto';
import Boton from '@components/Boton';
import Cargando from '@components/Cargando';
import ImagenPantalla from '@components/ImagenPantalla';
import { estilosGlobales } from '@styles/estilosGlobales';
import { validarCamposVacios } from '@utils/validaciones';
import { useTheme } from '@context/ThemeContext';
import loginImage from '@assets/images/iniciosesion.png';
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
            setError(t('llenar_todos_los_campos'));
            return false;
        }
        setError('');
        return true;
    };

    const onLoginPress = () => {
        if (validarInputs()) {
            handleLogin();
        } else {
            Alert.alert(t('error'), t('llenar_todos_los_campos'));
        }
    };

    return (
        <View style={[estilos.contenedor, { paddingHorizontal: 20 }]}>
            <ImagenPantalla 
                source={loginImage} 
                style={{ width: 300, height: 300, marginBottom: 5 }}
            />
            <Text style={estilos.descripcion}>{t('descripcion_iniciar_sesion')}</Text>
            <EntradaTexto
                placeholder={t('nombre_usuario')}
                value={nombreUsuario}
                onChangeText={setNombreUsuario}
                estilo={{ marginBottom: 15 }}
            />
            <EntradaTexto
                placeholder={t('contrasena')}
                secureTextEntry
                value={contrasena}
                onChangeText={setContrasena}
                estilo={{ marginBottom: 5 }}
            />
            <Text
                style={[estilos.link, { color: theme.colors.primary, textAlign: 'right', marginBottom: 20 }]}
                onPress={() => navigation.navigate('RecuperarContrasena')}
            >
                {t('olvidaste_contrasena')}?
            </Text>
            <Boton titulo={t('iniciar_sesion')} onPress={onLoginPress} />
            <Cargando visible={cargando} />
        </View>
    );
}