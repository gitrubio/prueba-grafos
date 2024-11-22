import { getCockTailById } from "@/api/cocktailApi";
import { getIngredientsWithMeasures } from "@/helpers/generator";
import {  CocktailInfo } from "@/types/cocktail.types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hook para obtener manejar las peticiones de cócteles
export const useInfoCocktail= (id: string | undefined) => {
    const [cocktail, setCocktail] = useState<CocktailInfo | null>(null);
    const [loading,setLoading] = useState<boolean>(true)
    const navigate = useNavigate();
    // Fetch the product from the API
    useEffect(() => {
        if(id) getCocktail(id)
    }, [])
    // Función para obtener un cóctel
    const getCocktail = async (id: string) => {
        try {
            const data = await getCockTailById(id);
            if(data.drinks[0]) {
                const ingredients = getIngredientsWithMeasures(data.drinks[0])
                setCocktail({...data.drinks[0], ingredients})
            }
            setLoading(false)
        } catch (error) {
            console.log('Error al obtener el cóctel:', error);
            navigate('/404')
        }
    }

    return {cocktail, getCocktail,loading};
};
