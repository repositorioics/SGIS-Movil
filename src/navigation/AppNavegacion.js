import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

// Importación de los Containers y Screens
import LoginContainer from '@containers/autenticacion/LoginContainer';
import NuevaContrasenaContainer from '@containers/autenticacion/NuevaContrasenaContainer';
import OTPContainer from '@containers/autenticacion/OTPContainer';
import RecuperarContrasenaContainer from '@containers/autenticacion/RecuperarContrasenaContainer';
import PantallaBienvenida from '@screens/bienvenida/PantallaBienvenida';
import ResumenContainer from '@containers/inicio/ResumenContainer';
import InventarioContenedor from '@containers/inventario/InventarioContenedor';
import PantallaOrdenes from '@screens/inicio/PantallaOrdenes';
import PantallaRequisas from '@screens/inicio/PantallaRequisas';
import PantallaEscanear from '@screens/inicio/PantallaEscanear';
import NotificacionesContenedor from '@containers/inicio/NotificacionesContenedor';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case t('inicio'):
                            iconName = 'home';
                            break;
                        case t('ordenes'):
                            iconName = 'list-alt';
                            break;
                        case t('requisas'):
                            iconName = 'clipboard';
                            break;
                        case t('escanear'):
                            iconName = 'qrcode';
                            break;
                        case t('inventario'):
                            iconName = 'cubes';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#318CE7',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    paddingHorizontal: 10,
                    paddingBottom: 20,
                    height: 80,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            })}
        >
            <Tab.Screen name={t('inicio')} component={ResumenContainer} options={{ headerShown: false }} />
            <Tab.Screen name={t('inventario')} component={InventarioContenedor} options={{ title: t('inventario') }} />
            <Tab.Screen name={t('ordenes')} component={PantallaOrdenes} options={{ title: t('ordenes') }} />
            <Tab.Screen name={t('requisas')} component={PantallaRequisas} options={{ title: t('requisas') }} />
            <Tab.Screen name={t('escanear')} component={PantallaEscanear} options={{ title: t('escanear') }} />
        </Tab.Navigator>
    );
}

export default function AppNavegacion() {
    const { t } = useTranslation();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="inicio">
                <Stack.Screen
                    name="Bienvenida"
                    component={PantallaBienvenida}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IniciarSesion"
                    component={LoginContainer}
                    options={{ title: t('iniciar_sesion') }}
                />
                <Stack.Screen
                    name="NuevaContrasena"
                    component={NuevaContrasenaContainer}
                    options={{ title: t('restablecer_contrasena') }}
                />
                <Stack.Screen
                    name="OTP"
                    component={OTPContainer}
                    options={{ title: t('codigo_otp') }}
                />
                <Stack.Screen
                    name="RecuperarContrasena"
                    component={RecuperarContrasenaContainer}
                    options={{ title: t('recuperar_contrasena') }}
                />
                <Stack.Screen
                    name="inicio"
                    component={HomeTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="notificaciones"
                    component={NotificacionesContenedor}
                    options={{ title: t('notificaciones') }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}