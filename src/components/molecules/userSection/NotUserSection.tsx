import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


// Componente para mostrar la sección de usuario en la barra de navegación cuando no hay usuario logeado
export default function NotUserSection() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton as="div" className={" cursor-pointer flex justify-center items-center gap-3"}>
        <div className="flex items-center  justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-md dark:bg-gray-600  ">
        
            <svg
              className="flex items-center w-12 h-12 text-gray-400 justify-center"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
    
        </div>
        </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
             <NavLink
             to={"/login"}
             className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
           >
             <ComputerDesktopIcon className="h-5 w-5 mr-2" />
             Iniciar Seccion
           </NavLink>
     
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
