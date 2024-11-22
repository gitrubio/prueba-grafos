import { CardFocus } from "@/components/molecules/CardFocus/CardFocus";
import { Cocktail } from "@/types/cocktail.types";
import { useState } from "react";

interface ListCardFocusProps {
  cocktails: Cocktail[];
}

export function ListCardFocus({ cocktails }: ListCardFocusProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 p-6">
      {cocktails.map((cocktail, index) => (
        <CardFocus
         key={cocktail.idDrink}
          cocktail={cocktail}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
