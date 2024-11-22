import { getEnvVariables } from '@/helpers/getEnvVariables';
import axios from 'axios';

const { VITE_API_COCKTAIL } = getEnvVariables();
export const cocktailApi = axios.create({
	baseURL: VITE_API_COCKTAIL,
});

export const getCockTailsByAlcoholic = async (Alcoholic: string) => {
    const { data } = await cocktailApi.get(`/filter.php?a=${Alcoholic}`);
    return data;
}

export const getCockTailsByCategory = async (category: string) => {
    const { data } = await cocktailApi.get(`/filter.php?c=${category}`);
    return data;
}

export const getCockTailById = async (id: string) => {
    const { data } = await cocktailApi.get(`/lookup.php?i=${id}`);
    return data;
}