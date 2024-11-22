import { getCockTailsByAlcoholic } from "@/api/cocktailApi";
import { Cocktail, CocktailAlcoholic } from "@/types/cocktail.types";
import { useState } from "react";

// Hook para obtener manejar las peticiones de cócteles
export const useGetCockTail= () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);


    const getCockTails = async (Alcoholic: CocktailAlcoholic) => {
       try {
        const data  = await getCockTailsByAlcoholic(Alcoholic);
        console.log('Cocktails:', data);
        setCocktails(data.drinks);
       } catch (error) {
        console.log('Error al obtener los cócteles:', error);
        
       }
    }

    // Función para obtener un cóctel
    const getCocktail = async (id: string) => {
     
    }

    return {cocktails, getCocktail, getCockTails};
};
