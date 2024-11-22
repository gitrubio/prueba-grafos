import { CardFocus } from "@/components/molecules/CardFocus/CardFocus";
import { Cocktail } from "@/types/cocktail.types";
import { useState } from "react";

interface ListCardFocusProps {
  cocktails: Cocktail[];
  className?: string;
  itemClassName?: string;
}

export function ListCardFocus({ cocktails, className , itemClassName}: ListCardFocusProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={className}>
      {cocktails.map((cocktail, index) => (
        <CardFocus
          className={itemClassName ?? 'h-96 max-w-96 md:max-h-96 md:max-w-96'}
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
