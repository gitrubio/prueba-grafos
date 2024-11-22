import {  getCockTailsByAlcoholic, getCockTailsByIngredient, getCockTailsByName } from "@/api/cocktailApi";
import { Cocktail, CocktailAlcoholic } from "@/types/cocktail.types";
import { useState } from "react";
import { getCockTailsByCategory } from '../api/cocktailApi';

// Hook para obtener manejar las peticiones de cócteles
export const useGetCockTails= () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // Función para obtener los cócteles con alcohol o sin alcohol
    const getCockTails = async (Alcoholic: CocktailAlcoholic) => {
       try {
        const data  = await getCockTailsByAlcoholic(Alcoholic);
        setCocktails(data.drinks ?? []);
        setLoading(false);
       } catch (error) {
        console.log('Error al obtener los cócteles:', error);
        
       }
    }
    // Función para obtener los cócteles por categoría
    const getCockTailsCategory = async (category: string) => {
        try {
         const data  = await getCockTailsByCategory(category);
         setCocktails(data.drinks ?? []);
         setLoading(false);
        } catch (error) {
         console.log('Error al obtener los cócteles:', error);
    }
    }
    // Función para obtener los cócteles por ingrediente
    const getCockTailsIngredient = async (ingredient: string) => {
        try {
         const data  = await getCockTailsByIngredient(ingredient);
         setCocktails(data.drinks ?? []);
         setLoading(false);
        } catch (error) {
         console.log('Error al obtener los cócteles:', error);
    }
    }
    // Función para obtener los cócteles por nombre
    const getCockTailsName = async (ingredient: string) => {
        try {
         const data  = await getCockTailsByName(ingredient);
         setCocktails(data.drinks ?? []);
         setLoading(false);
        } catch (error) {
         console.log('Error al obtener los cócteles:', error);
    }
    }
    

    return {cocktails,loading, getCockTails, getCockTailsCategory, getCockTailsIngredient, getCockTailsName };
};
