import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

 // COMBINA CLASSES DE TAILWIND Y CLSX
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}