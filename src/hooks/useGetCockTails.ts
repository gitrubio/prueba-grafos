import {  getCockTailsByAlcoholic } from "@/api/cocktailApi";
import { Cocktail, CocktailAlcoholic } from "@/types/cocktail.types";
import { useState } from "react";
import { getCockTailsByCategory } from '../api/cocktailApi';

// Hook para obtener manejar las peticiones de cócteles
export const useGetCockTails= () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    // Función para obtener los cócteles con alcohol o sin alcohol
    const getCockTails = async (Alcoholic: CocktailAlcoholic) => {
       try {
        const data  = await getCockTailsByAlcoholic(Alcoholic);
        setCocktails(data.drinks);
       } catch (error) {
        console.log('Error al obtener los cócteles:', error);
        
       }
    }

    const getCockTailsCategory = async (category: string) => {
        try {
         const data  = await getCockTailsByCategory(category);
         setCocktails(data.drinks);
        } catch (error) {
         console.log('Error al obtener los cócteles:', error);
    }
    }
    

    return {cocktails, getCockTails, getCockTailsCategory };
};
