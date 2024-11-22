import { cn } from '@/helpers/utils'
import { Cocktail } from '@/types/cocktail.types';
import { useNavigate } from 'react-router-dom';


interface CardFocusProps {
    hovered: number | null;
    index: number;
    cocktail: Cocktail;
    setHovered: (index: number | null) => void;
    className?: string;
}

export function CardFocus(CardFocusProps: CardFocusProps) {
    const { hovered, index, cocktail, setHovered,className } = CardFocusProps
    const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate(`/cocktail/${cocktail.idDrink}`)}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      className,
      "cursor-pointer rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden  transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={cocktail.strDrinkThumb}
      alt={cocktail.strDrink}
      className="object-cover h-full absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {cocktail.strDrink}
      </div>
    </div>
  </div>
  )
}
