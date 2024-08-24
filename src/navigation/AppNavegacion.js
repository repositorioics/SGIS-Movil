import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

// Importación de los Containers
import LoginContainer from '../containers/autenticacion/LoginContainer';
import NuevaContrasenaContainer from '../containers/autenticacion/NuevaContrasenaContainer';
import OTPContainer from '../containers/autenticacion/OTPContainer';
import RecuperarContrasenaContainer from '../containers/autenticacion/RecuperarContrasenaContainer';
import PantallaBienvenida from '../screens/bienvenida/PantallaBienvenida'; // Pantalla sin container

const Stack = createStackNavigator();

export default function AppNavegacion() {
    const { t } = useTranslation();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Bienvenida">
            <Stack.Screen
                    name="Bienvenida"
                    component={PantallaBienvenida}
                    options={{ title: t('welcome') }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginContainer}
                    options={{ title: t('login') }}
                />
                <Stack.Screen
                    name="NuevaContrasena"
                    component={NuevaContrasenaContainer}
                    options={{ title: t('reset_password') }}
                />
                <Stack.Screen
                    name="OTP"
                    component={OTPContainer}
                    options={{ title: t('otp_code') }}
                />
                <Stack.Screen
                    name="RecuperarContrasena"
                    component={RecuperarContrasenaContainer}
                    options={{ title: t('reset_password') }}
                />
                {/* Agrega aquí otras pantallas según sea necesario */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}