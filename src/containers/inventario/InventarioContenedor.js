import React, { useState, useEffect } from 'react';
import PantallaInventario from '@screens/inventario/PantallaInventario';

export default function InventarioContenedor() {
  const [insumos, setInsumos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Cargar datos de prueba o datos reales de la API
    const datosDePrueba = [
      { id: 1, codigo: 'INS-001', nombre: 'Insumo 1', unidadMedida: 'kg', cantidadTotal: 100, categoria: 'Reactivos', critico: false },
      { id: 2, codigo: 'INS-002', nombre: 'Insumo 2', unidadMedida: 'lt', cantidadTotal: 10, categoria: 'Equipo', critico: true },
      { id: 3, codigo: 'INS-003', nombre: 'Insumo 3', unidadMedida: 'kg', cantidadTotal: 200, categoria: 'Reactivos', critico: false },
      { id: 4, codigo: 'INS-004', nombre: 'Insumo 4', unidadMedida: 'm', cantidadTotal: 150, categoria: 'Materiales', critico: true },
    ];

    setInsumos(datosDePrueba);
  }, []);

  const filtrarInsumos = () => {
    let insumosFiltrados = [...insumos];

    if (filtroCategoria) {
      insumosFiltrados = insumosFiltrados.filter(insumo => insumo.categoria === filtroCategoria);
    }

    if (busqueda) {
      insumosFiltrados = insumosFiltrados.filter(insumo => 
        insumo.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
        insumo.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return insumosFiltrados;
  };

  const manejarBusqueda = (valorBusqueda) => {
    setBusqueda(valorBusqueda);
  };

  const manejarFiltroCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  return (
    <PantallaInventario 
      insumos={filtrarInsumos()} 
      onSearch={manejarBusqueda} 
      onFilter={manejarFiltroCategoria} 
    />
  );
}