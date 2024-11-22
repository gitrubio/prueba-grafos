import { cn } from '@/helpers/utils';
import { useGetCockTail } from '@/hooks/useGetCockTail'
import { CocktailAlcoholic } from '@/types/cocktail.types';
import React, { useEffect, useState } from 'react'

export function Homeview() {

    const [hovered, setHovered] = useState<number | null>(null);
    const {cocktails, getCockTails } = useGetCockTail()
    useEffect(() => {
    console.log('render component');
        getCockTails(CocktailAlcoholic.Alcoholic)
    }, [])
  
    return (
        <section className='flex flex-col'>
           <div className='w-full h-20 bg-red-500 mb-4'>

           </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
                {cocktails.map((cocktail,index) => (
                    <div
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
                    )}
                  >
                    <img
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                      className="object-cover absolute inset-0"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                        hovered === index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                        {cocktail.strDrink}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

        </section>
  )
}
