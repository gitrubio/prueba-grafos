import { getEnvVariables } from '@/helpers/getEnvVariables';
import axios from 'axios';
// Obtiene las variables de entorno VITE_API_COCKTAIL desde el archivo .env
const { VITE_API_COCKTAIL } = getEnvVariables();
export const cocktailApi = axios.create({
	baseURL: VITE_API_COCKTAIL,
});
// funcion para obtener todas las bebidas por categoria de alcohol
export const getCockTailsByAlcoholic = async (Alcoholic: string) => {
    const { data } = await cocktailApi.get(`/filter.php?a=${Alcoholic}`);
    return data;
}
// funcion para obtener todas las bebidas por categoria
export const getCockTailsByCategory = async (category: string) => {
    const { data } = await cocktailApi.get(`/filter.php?c=${category}`);
    return data;
}

// funcion para obtener todas las bebidas por ingrediente
export const getCockTailsByIngredient = async (ingredient: string) => {
    const { data } = await cocktailApi.get(`/filter.php?i=${ingredient}`);
    return data;
}

// funcion para obtener todas las bebidas por nombre
export const getCockTailsByName = async (name: string) => {
    const { data } = await cocktailApi.get(`/search.php?s=${name}`);
    return data;
}
// funcion para obtener todas las bebidas por id
export const getCockTailById = async (id: string) => {
    const { data } = await cocktailApi.get(`/lookup.php?i=${id}`);
    return data;
}