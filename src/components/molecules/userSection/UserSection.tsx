import { generateInitials } from "@/helpers/generator";
import { IUser } from "@/store/auth/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface UserSectionProps {
  user: IUser;
  handleLogut: () => void;
}
// Componente para mostrar la sección de usuario en la barra de navegación
export default function UserSection({ user, handleLogut }: UserSectionProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        as="div"
        className={" cursor-pointer flex justify-center items-center gap-3"}
      >
        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-md dark:bg-gray-600">
          <span className="font-medium text-green-700 dark:text-gray-300">{generateInitials(user.displayName)}</span>
        </div>

        <div className=" hidden md:flex flex-col items-start ">
          <div className="">{user.displayName}</div>
          <div className="text-xs  text-green-700">{user.email}</div>
        </div>
        <ChevronDownIcon className=" hidden md:block size-6" />
      </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex flex-col items-start md:hidden m-2 border-b-2">
          <div className="">
            {user.displayName}
          </div>
          <div className="text-xs mb-2">{user.email}</div>
        </div>
        <MenuItem>
          <div
            onClick={handleLogut}
            className="flex px-2 py-2 text-sm  text-red-500 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5 mr-2" />
            Cerrar Seccion
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
