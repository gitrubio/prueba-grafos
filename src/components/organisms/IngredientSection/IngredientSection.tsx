import IngredientCard from "@/components/molecules/IngredientCard/IngredientCard";
import { RadioGroup } from "@headlessui/react";

interface IngredientsProps {
  ingredients: { ingredient: string; measure: string }[];
}

export default function IngredientSection({ingredients} : IngredientsProps) {
  return (
    <div className="m lg:col-span-2">
      <div className="mt-1">
        <div className="flex items-start justify-center">
          <h2 className="text-xl font-medium text-gray-900">Ingredients</h2>
        </div>
        <div className="flex items-center justify-center mt-4 ">
          <RadioGroup className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {ingredients.map((item) => (
              <IngredientCard {...item} />
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
