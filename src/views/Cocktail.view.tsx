import BigLoader from "@/components/molecules/loader/BigLoader";
import IngredientSection from "@/components/organisms/IngredientSection/IngredientSection";
import { useInfoCocktail } from "@/hooks/useInfoCocktail";
import { useParams } from "react-router-dom";

export function CockTailView() {
  const { id } = useParams();
  const { cocktail, loading } = useInfoCocktail(id);

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
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ">
          <div className="max-w-2xl lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 flex flex-col items-center ">
            <div className="w-[500px] h-[500px] overflow-hidden rounded-lg lg:block">
              {!cocktail?.strDrinkThumb && (
                <svg
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className=" text-gray-200 dark:text-gray-600 w-full h-full "
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
                </svg>
              )}
              {cocktail?.strDrinkThumb && (
                <img
                  src={cocktail.strDrinkThumb}
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {cocktail?.strDrink}
            </h1>
            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
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
