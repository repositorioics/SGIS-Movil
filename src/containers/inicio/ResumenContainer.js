import React, { useEffect, useState } from 'react';
import PantallaResumen from '@screens/inicio/PantallaResumen';

export default function ResumenContainer({ navigation }) {
  const [inventoryData, setInventoryData] = useState(null);
  const [ordersData, setOrdersData] = useState(null);
  const [notificationsData, setNotificationsData] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fakeInventoryData = {
      lowStock: 13,
      urgentItems: 8,
      criticalItems: 5,
      categories: 15,
      totalItems: 419,
      totalValue: "$107,500",
    };

    const fakeOrdersData = {
      approved: 24,
      notApproved: 5,
      pending: 12,
      orders: [
        { codigo: 'ORD001', createdAt: '2024-08-01', status: 'Aprobada', creadoPor: 'Juan Pérez', sitio: 'Bodega Central' },
        { codigo: 'ORD002', createdAt: '2024-08-10', status: 'No Aprobada', creadoPor: 'María López', sitio: 'Bodega Norte' },
        { codigo: 'ORD003', createdAt: '2024-08-15', status: 'Pendiente', creadoPor: 'Carlos Gómez', sitio: 'Bodega Sur' },
        { codigo: 'ORD004', createdAt: '2024-08-20', status: 'Pendiente', creadoPor: 'Ana Martínez', sitio: 'Bodega Este' },
      ],
      historicalData: [
        { month: 'Junio', approved: 8, notApproved: 2 },
        { month: 'Julio', approved: 7, notApproved: 3 },
        { month: 'Agosto', approved: 9, notApproved: 0 },
      ],
    };

    const fakeNotificationsData = {
      requisitions: [
        { codigo: 'REQ001', createdAt: '2024-08-05', status: 'Pendiente', creadoPor: 'Luis Fernández', sitio: 'Bodega Oeste' },
        { codigo: 'REQ002', createdAt: '2024-08-12', status: 'Completada', creadoPor: 'Elena Sánchez', sitio: 'Bodega Norte' },
        { codigo: 'REQ003', createdAt: '2024-08-18', status: 'Completada', creadoPor: 'José Ramírez', sitio: 'Bodega Central' },
      ],
      alerts: 5,
    };

    setTimeout(() => {
      setInventoryData(fakeInventoryData);
      setOrdersData(fakeOrdersData);
      setNotificationsData(fakeNotificationsData);
      setCargando(false);
    }, 1000);
  }, []);

  const handleNotificationClick = () => {
    navigation.navigate('Notificaciones');
  };

  const handleSettingsClick = () => {
    navigation.navigate('Configuracion');
  };

  return (
    <PantallaResumen
      inventoryData={inventoryData}
      ordersData={ordersData}
      notificationsData={notificationsData}
      cargando={cargando}
      onSearch={() => console.log('Buscar insumos')}
      onOrderClick={(order) => console.log('Ver detalle de la orden:', order)}
      onRequisitionClick={(req) => console.log('Ver detalle de la requisa:', req)}
      onNotificationClick ={handleNotificationClick}
      onSettingsClick={handleSettingsClick}
    />
  );
}