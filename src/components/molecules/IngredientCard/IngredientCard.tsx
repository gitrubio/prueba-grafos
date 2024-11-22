import { cn } from "@/helpers/utils";
import { Radio } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

interface IngredientCardProps {
        ingredient: string;
        measure: string;
}
export default function IngredientCard({ingredient,measure} : IngredientCardProps) {
    const navigate = useNavigate()
  return (
    <div className="hover:text-[#70B852]">
      <Radio
        onClick={()=> navigate(`/ingredient/${ingredient}`)}
        key={ingredient}
        value={ingredient}
        className={cn(
          "cursor-pointer bg-white text-gray-900 shadow-sm hover:shadow-[#70B852]",
          "group relative w-48 h-48 flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
        )}
      >
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`}
          className="object-cover object-center w-full h-full"
        />
      </Radio>
      <p>
        {measure} {ingredient}
      </p>
    </div>
  );
}
