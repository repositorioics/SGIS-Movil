// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Guarda un valor en AsyncStorage.
 * @param {string} key - La clave para almacenar el valor.
 * @param {any} value - El valor a almacenar.
 */
export const saveItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error al guardar el item (${key}):`, error);
  }
};

/**
 * Obtiene un valor de AsyncStorage.
 * @param {string} key - La clave del valor a obtener.
 * @returns {any} El valor almacenado o null si no existe.
 */
export const getItem = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Error al obtener el item (${key}):`, error);
    return null;
  }
};

/**
 * Elimina un valor de AsyncStorage.
 * @param {string} key - La clave del valor a eliminar.
 */
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error al eliminar el item (${key}):`, error);
  }
};

/**
 * Limpia todos los items en AsyncStorage.
 */
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error al limpiar AsyncStorage:', error);
  }
};