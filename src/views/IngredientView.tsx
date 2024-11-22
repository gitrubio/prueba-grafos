import BigLoader from '@/components/molecules/loader/BigLoader';
import { ListCardFocus } from '@/components/organisms/ListCard/ListCardFocus';
import { useGetCockTails } from '@/hooks/useGetCockTails';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export function IngredientView() {
    
  const { ingredientID } = useParams();
  const { cocktails, getCockTailsIngredient, loading } = useGetCockTails();

    useEffect(() => {
        getCockTailsIngredient(ingredientID ?? '');
    },[]);


    if (loading) {
        return (
          <div className="w-full h-screen flex justify-center items-center">
            <BigLoader />
          </div>
        );
      }


  return (
    <div className="container mx-auto px-4 py-2">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Producto principal */}
      <div className="bg-white rounded-lg shadow-xl p-6 max-h-[600px]">
          <h2 className="text-2xl font-bold mb-2">{ingredientID}</h2>
        <img
           src={`https://www.thecocktaildb.com/images/ingredients/${ingredientID}.png`}
          alt="Producto principal"
          className="w-full h-[500px] rounded-lg"
        />
   
      </div>

      {/* Lista de cocktails */}
      <div>
        <h3 className="text-xl font-bold mb-4">Cocktails with {ingredientID}</h3>
        <div className="space-y-4">
        <ListCardFocus
        itemClassName=' h-96 w-96 md:h-40 md:w-auto text-sm '
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 p-6 m-3"
          cocktails={cocktails}
          key={"cocktails-list-focus"}
        />
        </div>
      </div>
    </div>
  </div>
  )
}
