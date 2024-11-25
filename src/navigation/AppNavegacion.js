import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@context/ThemeContext";

// Importación de los Containers y Screens
import LoginContainer from "@containers/autenticacion/LoginContainer";
import PantallaInternacionalizacion from "@screens/bienvenida/PantallaInternacionalizacion";
import NuevaContrasenaContainer from "@containers/autenticacion/NuevaContrasenaContainer";
import OTPContainer from "@containers/autenticacion/OTPContainer";
import RecuperarContrasenaContainer from "@containers/autenticacion/RecuperarContrasenaContainer";
import PantallaBienvenida from "@screens/bienvenida/PantallaBienvenida";
import ResumenContainer from "@containers/inicio/ResumenContainer";
import InventarioContenedor from "@containers/inventario/InventarioContenedor";
import PantallaOrdenes from "@screens/inicio/PantallaOrdenes";
import PantallaRequisas from "@screens/inicio/PantallaRequisas";
//import EscanearContenedor from "@containers/inicio/EscanearContenedor";
import NotificacionesContenedor from "@containers/inicio/NotificacionesContenedor";

//import PantallaDetallesProducto from '@containers/inicio/PantallaDetallesProducto';
//import PantallaResumen from '@screens/inventario/PantallaResumen';
import PantallaDetallesProducto from "@containers/inventario/DetallesProductoContenedor";
import PantallaResumen from "@screens/inventario/PantallaResumen";
import PantallaConfirmacion from "@screens/inventario/PantallaConfirmacion";
import ConfiguracionContenedor from "@containers/configuracion/ConfiguracionContenedor";
import EditarPerfilContenedor from "@containers/configuracion/EditarPerfilContenedor";
import CambiarContrasenaContenedor from "@containers/configuracion/CambiarContrasenaContenedor";

import SeleccionEntregaContainer from "@containers/entrega/SeleccionEntregaContainer";
import DatosGeneralesEntregaContainer from "@containers/entrega/DatosGeneralesEntregaContainer";
import DetallesEntregaContainer from "@containers/entrega/DetallesEntregaContainer";
import EscanerCodigoContainer from "@containers/entrega/EscanerCodigoContainer";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  const { t } = useTranslation();
  const { theme } = useTheme(); 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case t("inicio"):
              iconName = "home";
              break;
            case t("ordenes"):
              iconName = "list-alt";
              break;
            case t("requisas"):
              iconName = "clipboard";
              break;
            case t("escanear"):
              iconName = "qrcode";
              break;
            case t("inventario"):
              iconName = "cubes";
              break;
            default:
              iconName = "circle";
              break;
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor:theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          paddingHorizontal: 10,
          paddingBottom: 10,
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      })}
    >
      <Tab.Screen
        name={t("inicio")}
        component={ResumenContainer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={t("inventario")}
        component={InventarioContenedor}
        options={{ title: t("inventario") }}
      />
      <Tab.Screen
        name={t("ordenes")}
        component={PantallaOrdenes}
        options={{ title: t("ordenes") }}
      />
      <Tab.Screen
        name={t("requisas")}
        component={PantallaRequisas}
        options={{ title: t("requisas") }}
      />
      <Stack.Screen
          name="SeleccionEntrega"
          component={SeleccionEntregaContainer}
          options={{ title: t("seleccion_entrega") }}
        />
    </Tab.Navigator>
  );
}

export default function AppNavegacion() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
      }}>

        <Stack.Screen
          name="Bienvenida"
          component={PantallaBienvenida}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Internacionalizacion"
          component={PantallaInternacionalizacion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IniciarSesion"
          component={LoginContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NuevaContrasena"
          component={NuevaContrasenaContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasenaContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navbar"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notificaciones"
          component={NotificacionesContenedor}
          options={{ title: t("notificaciones") }}
        />
        <Stack.Screen
          name="DetallesProducto" // Agregar
          component={PantallaDetallesProducto} // Agregar
          options={{ title: t("detalles_producto") }} // Agregar
        />

        <Stack.Screen
          name="PantallaResumen" // Agregar (opcional)
          component={PantallaResumen} // Agregar (opcional)
          options={{ title: t("resumen") }} // Agregar (opcional)
        />
        <Stack.Screen
          name="PantallaConfirmacion"
          component={PantallaConfirmacion} // Cambia esto a PantallaConfirmacion
          options={{ title: t("confirmacion") }}
        />
        <Stack.Screen
          name="Configuracion"
          component={ConfiguracionContenedor} // Cambia esto a PantallaConfirmacion
          options={{ title: t("Configuracion") }}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfilContenedor}
          options={{ title: t("editar_perfil") }}
        />
        <Stack.Screen
          name="CambiarContrasena"
          component={CambiarContrasenaContenedor}
          options={{ title: t("cambiar_contrasena") }}
        />
        <Stack.Screen
          name="DatosGenerales"
          component={DatosGeneralesEntregaContainer}
          options={{ title: t("datos_generales") }}
        />
        <Stack.Screen
          name="DetallesEntrega"
          component={DetallesEntregaContainer}
          options={{ title: t("detalles_entrega") }}
        />
        <Tab.Screen
        name={t("EscanerCodigo")}
        component={EscanerCodigoContainer}
        options={{ title: t("escanear") }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}