import ImgProduct from "@/components/molecules/ImgProduct/ImgProduct";
import BigLoader from "@/components/molecules/loader/BigLoader";
import IngredientSection from "@/components/organisms/IngredientSection/IngredientSection";
import ScrollToTop from "@/hooks/useCrollToTop";
import { useInfoCocktail } from "@/hooks/useInfoCocktail";
import { useParams } from "react-router-dom";

export function CockTailView() {
  const { id } = useParams();
  const { cocktail, loading } = useInfoCocktail(id);
  ScrollToTop()
  
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <BigLoader />
      </div>
    );
  }
  return (
    <div className="bg-white" key={cocktail?.idDrink}>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <div className="flex items-center">
              <p className="mr-2 text-sm font-medium text-gray-900">
                {cocktail?.strCategory}
              </p>
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
            <li className="text-sm">
              <p
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {cocktail?.strDrink}
              </p>
            </li>
          </ol>
        </nav>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-2 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-2 ">
          <div className="max-w-2xl lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 flex flex-col items-center ">
            <div className="w-[500px] h-[500px] overflow-hidden rounded-lg lg:block">
              {cocktail?.strDrinkThumb && (
                <ImgProduct
                  name={""}
                  urlImage={cocktail?.strDrinkThumb ?? ""}
                />
              )}
            </div>
            <h1 className="pt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {cocktail?.strDrink}
            </h1>
            <div className="lg:col-span-2 lg:col-start-1  text-justify  w-[452px] lg:pb-16 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {cocktail?.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <IngredientSection
            ingredients={cocktail?.ingredients ?? []}
            key={"section-over-ingredients"}
          />
        </div>
      </div>
    </div>
  );
}
