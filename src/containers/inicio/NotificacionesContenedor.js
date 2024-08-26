import React, { useState, useEffect } from 'react';
import PantallaNotificaciones from '@screens/inicio/PantallaNotificaciones';
import { useTranslation } from 'react-i18next';

export default function NotificacionesContenedor({ navigation }) {
  const { t } = useTranslation();
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    // Datos de prueba para las notificaciones, incluyendo una fecha
    const datosDePrueba = [
      {
        id: 1,
        tipo: 'nueva_orden',
        titulo: 'Nueva Orden Recibida',
        descripcion: 'Se ha recibido una nueva orden. Haz clic para ver los insumos incluidos.',
        fecha: '2024-08-26',  // Fecha de la notificación
      },
      {
        id: 2,
        tipo: 'stock_bajo',
        titulo: 'Stock Bajo',
        descripcion: 'Algunos productos están bajos en stock o próximos a vencer. Haz clic para ver los detalles.',
        fecha: '2024-08-25',
      },
      {
        id: 3,
        tipo: 'orden_aprobada',
        titulo: 'Orden Aprobada',
        descripcion: 'Tu orden ha sido aprobada. Haz clic para verificar la orden.',
        fecha: '2024-08-25',
      },
      {
        id: 4,
        tipo: 'pedido_aprobado',
        titulo: 'Pedido Aprobado',
        descripcion: 'Los insumos han sido seleccionados y aprobados para el pedido. Haz clic para ver los detalles.',
        fecha: '2024-08-24',
      },
      {
        id: 5,
        tipo: 'entrega_pedido',
        titulo: 'Entrega de Pedido',
        descripcion: 'Los insumos han sido entregados. Haz clic para ver los detalles, incluyendo los productos emergentes.',
        fecha: '2024-08-23',
      },
      {
        id: 6,
        tipo: 'requisa_recibida',
        titulo: 'Requisa Recibida',
        descripcion: 'Se ha recibido una requisición. Haz clic para ver los insumos solicitados.',
        fecha: '2024-08-22',
      },
      {
        id: 7,
        tipo: 'entrega_requisa',
        titulo: 'Entrega de Requisa',
        descripcion: 'Los insumos han sido enviados en respuesta a la requisición. Haz clic para ver los detalles.',
        fecha: '2024-08-21',
      },
      {
        id: 8,
        tipo: 'orden_completa',
        titulo: 'Orden Completa',
        descripcion: 'Todos los pedidos han sido recibidos y la orden está completa. Haz clic para ver los detalles.',
        fecha: '2024-08-20',
      }
    ];

    // Agrupar notificaciones por fecha
    const notificacionesAgrupadas = datosDePrueba.reduce((acc, notificacion) => {
      const fecha = notificacion.fecha;
      if (!acc[fecha]) {
        acc[fecha] = [];
      }
      acc[fecha].push(notificacion);
      return acc;
    }, {});

    // Establece las notificaciones en el estado
    setNotificaciones(notificacionesAgrupadas);
  }, []);

  const handleNotificationClick = (notificacion) => {
    switch (notificacion.tipo) {
      case 'nueva_orden':
        navigation.navigate('Ordenes', { notificacion });
        break;
      case 'stock_bajo':
        navigation.navigate('Inventario', { notificacion });
        break;
      case 'orden_aprobada':
        navigation.navigate('Ordenes', { notificacion });
        break;
      case 'pedido_aprobado':
        navigation.navigate('Pedidos', { notificacion });
        break;
      case 'entrega_pedido':
        navigation.navigate('Pedidos', { notificacion });
        break;
      case 'requisa_recibida':
        navigation.navigate('Requisas', { notificacion });
        break;
      case 'entrega_requisa':
        navigation.navigate('Requisas', { notificacion });
        break;
      case 'orden_completa':
        navigation.navigate('Ordenes', { notificacion });
        break;
      default:
        break;
    }
  };

  return (
    <PantallaNotificaciones
      notificaciones={notificaciones}
      handleNotificationClick={handleNotificationClick}
    />
  );
}