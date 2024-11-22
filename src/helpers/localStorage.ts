import { LocalStorageNames } from '../constants/localStorageNames';

export const saveItemInStorage = (name: LocalStorageNames, data: string) => {
	// Guardar en el local storage
	localStorage.setItem(name, data);
};
export const getItemInStorage = <T>(name: LocalStorageNames) => {
	// Obtener del local storage
	return JSON.parse(localStorage.getItem(name) as string) as T;
};

export const removeItemInStorage = (name: LocalStorageNames) => {
	// Eliminar del local storage
	localStorage.removeItem(name);
};
