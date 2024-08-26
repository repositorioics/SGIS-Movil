import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ElementoResumen from '@components/ElementoResumen';
import SeccionResumen from '@components/SeccionResumen';
import { useTheme } from '@context/ThemeContext';
import { useTranslation } from 'react-i18next';
import GráficoResumen from '@components/GraficoResumen';
import BarraBusqueda from '@components/BarraBusqueda';
import Cargando from '@components/Cargando';
import { estilosGlobales } from '@styles/estilosGlobales';

export default function PantallaResumen({
  inventoryData,
  ordersData,
  notificationsData,
  cargando,
  onSearch,
  onOrderClick,
  onRequisitionClick,
  onNotificationClick,
}) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const estilos = crearEstilos(theme);
  const gEstilos = estilosGlobales(theme);

  if (cargando) {
    return <Cargando />;
  }

  const getEstadoEstilo = (status) => {
    switch (status) {
      case 'Aprobada':
      case 'Completada':
        return estilos.estadoTextoAprobada;
      case 'No Aprobada':
        return estilos.estadoTextoNoAprobada;
      case 'Pendiente':
      default:
        return estilos.estadoTextoPendiente;
    }
  };

  return (
    <View style={estilos.contenedor}>

      <View style={gEstilos.header}>
        <Text style={gEstilos.tituloHeader}>{t('inicio')}</Text>
        <TouchableOpacity onPress={onNotificationClick}>
          <FontAwesome name="bell" size={24} color={theme.colors.primary} al/>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <BarraBusqueda onSearch={onSearch} />
        <GráficoResumen data={ordersData.historicalData} />

        <View style={estilos.resumenesCard}>
          <Text style={estilos.tituloSeccion}>{t('resumen_inventario')}</Text>
          <View style={estilos.fila}>
            <ElementoResumen
              titulo={t('bajo_stock')}
              valor={`${inventoryData.lowStock} ${t('items')}`}
              nombreIcono="exclamation-triangle"
              colorIcono="#FF6F61"
              style={estilos.cardBox}
            />
            <ElementoResumen
              titulo={t('proximos_a_vencer')}
              valor={`${inventoryData.urgentItems} ${t('items')}`}
              nombreIcono="clock-o"
              colorIcono="#FFA500"
              style={estilos.cardBox}
            />
          </View>
          <View style={estilos.fila}>
            <ElementoResumen
              titulo={t('ordenes_ultimos_3_meses')}
              valor={`${ordersData.approved} ${t('aprobadas')} | ${ordersData.notApproved} ${t('no_aprobadas')}`}
              nombreIcono="check-circle"
              colorIcono="#28A745"
              style={estilos.cardBox}
            />
          </View>
        </View>

        <SeccionResumen
          titulo="ordenes_realizadas"
          data={ordersData.orders}
          onItemClick={onOrderClick}
          getEstadoEstilo={getEstadoEstilo}
        />

        <SeccionResumen
          titulo="requisas"
          data={notificationsData.requisitions}
          onItemClick={onRequisitionClick}
          getEstadoEstilo={getEstadoEstilo}
        />
      </ScrollView>
    </View>
  );
}

const crearEstilos = (theme) => StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: theme.colors.background50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: theme.colors.background50,
  },
  resumenesCard: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardBox: {
    width: '48%',
    padding: 15,
    backgroundColor: theme.colors.card,
    borderRadius: 10,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  estadoTextoAprobada: {
    color: 'green',
  },
  estadoTextoNoAprobada: {
    color: 'red',
  },
  estadoTextoPendiente: {
    color: 'orange',
  },
});