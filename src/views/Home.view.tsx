import FilterSection from "@/components/organisms/Filters/FilterSection";
import { ListCardFocus } from "@/components/organisms/ListCard/ListCardFocus";
import { useGetCockTails } from "@/hooks/useGetCockTails";
import { CocktailAlcoholic } from "@/types/cocktail.types";
import { useEffect } from "react";

export function Homeview() {
  const { cocktails, getCockTails, getCockTailsCategory } = useGetCockTails();

  useEffect(() => {
    getCockTails(CocktailAlcoholic.Alcoholic);
  }, []);

  const handleCategory = async (category: string | null) => {
    try {
      if (category) {
        await getCockTailsCategory(category);
      } else {
        await getCockTails(CocktailAlcoholic.Alcoholic);
      }
    } catch (error) {
      console.log("Error al obtener los cócteles:", error);
    }
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-center justify-end pr-10 w-full h-20  mb-4 ">
        <FilterSection handleCategory={handleCategory} />
      </div>
      <div className="block ml-4">
        <ListCardFocus
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 p-6 m-3"
          cocktails={cocktails}
          key={"cocktails-list-focus"}
        />
      </div>
    </section>
  );
}
