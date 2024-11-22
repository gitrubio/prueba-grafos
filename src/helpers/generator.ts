import { Cocktail } from "@/types/cocktail.types";

export const generateUniqueId = (): string => {
    // Generar una parte aleatoria con caracteres alfanuméricos
    const randomPart = Math.random().toString(36).substring(2, 10); // Genera una cadena de 8 caracteres aleatorios

    // Añadir un timestamp para garantizar que sea unica
    const timestampPart = Date.now().toString(36); // Convierte el timestamp a base 36

    // Combinar ambas partes
    return `${randomPart}-${timestampPart}`;
};

export const generateInitials = (name: string): string => {
    // Dividir el nombre en palabras eliminando espacios adicionales
    const words = name.trim().split(/\s+/);

    // Tomar la primera letra de cada palabra y convertirla a mayúscula
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

    return initials;
};

// Función para obtener los ingredientes con sus medidas de un coctel
export const getIngredientsWithMeasures = (cocktail: Cocktail) => {
    const ingredients = Array.from({ length: 15 }, (_, i) => cocktail[`strIngredient${i + 1}` as keyof Cocktail]);
    const measures = Array.from({ length: 15 }, (_, i) => cocktail[`strMeasure${i + 1}` as keyof Cocktail]);
  
    // Combinar ingredientes con medidas y filtrar los valores vacíos
    const combined = ingredients
      .map((ingredient, index) => {
        if (!ingredient) return null; // Ignorar si el ingrediente es null
        return {
          ingredient: ingredient.trim(),
          measure: measures[index]?.trim() || "", // Medida opcional
        };
      })
      .filter(Boolean); // Filtrar los nulos
  
    return combined as { ingredient: string; measure: string }[];
  }