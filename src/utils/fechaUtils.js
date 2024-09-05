import { format, isToday, isYesterday, isThisWeek, isThisMonth, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export function obtenerEtiquetaFecha(fechaCompleta) {
  const fechaObj = parseISO(fechaCompleta);

  if (isToday(fechaObj)) {
    return 'Today';
  } else if (isYesterday(fechaObj)) {
    return 'Yesterday';
  } else if (isThisWeek(fechaObj)) {
    return 'This Week';
  } else if (isThisMonth(fechaObj)) {
    return 'This Month';
  } else {
    // Si no es este mes, mostramos la fecha completa
    return format(fechaObj, 'yyyy-MM-dd', { locale: es });
  }
}

export function obtenerHoraMinutos(fechaCompleta) {
  const fechaObj = parseISO(fechaCompleta);
  return format(fechaObj, 'HH:mm', { locale: es });
}