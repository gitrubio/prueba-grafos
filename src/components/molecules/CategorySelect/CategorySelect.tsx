import { CategoryData } from "@/constants/data";
import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";

interface CategorySelectProps {
  handleCategory: (category: string | null) => void;
}

export default function CategorySelect({handleCategory}: CategorySelectProps) {
  const [category, setCategory] = useState<string | null>(null);

  const handleChangeCategory = (NewCategory: string, state: boolean) => {
    if (!state) {
      setCategory(null);
      return;
    }
    setCategory(NewCategory);
  };

  
  

  return (
    <Popover className="relative" >
      <PopoverButton className="text-white bg-[#70B852] hover:bg-[#62a047]  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ">
          Filter by category
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col  w-56 p-3" >
        <div
       
          className="z-10  p-3 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {CategoryData.map((item) => (
              <li className="flex items-center" key={item}>
                <input
                  id={item}
                  type="checkbox"
                  value={item}
                  checked={item === category}
                  onChange={(e) => {
                    handleChangeCategory(e.target.value, e.target.checked);
                  }}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {item}
                </label>
              </li>
            ))}
            <CloseButton
              onClick={()=> handleCategory(category)}
              className="w-full text-white bg-[#70B852] hover:bg-[#5e9945] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Apply
            </CloseButton>
          </ul>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
