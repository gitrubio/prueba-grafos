
import { useAuthStore } from "@/hooks/useAuthStore";
import { AuthenticationStatus } from "@/store/auth/types";
import { NavLink } from "react-router-dom";
import UserSection from "@/components/molecules/userSection/UserSection";
import NotUserSection from "@/components/molecules/userSection/NotUserSection";
import BarSearch from "@/components/molecules/searchBar/SearchBar";
export default function NavBar() {
  const { status, user, handledLogout } = useAuthStore();
  
  return (
    <nav className="bg-transparent border-gray-200 shadow-sm dark:bg-gray-900 w-full border-b-2 min-h-20 transition-all ease-in-out">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={"/images/logo.png"}
            className="h-28 absolute"
            alt="logo of the project"
          />
          <div className="hidden md:block absolute left-28">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Craft
              <span className="text-[#70B852]">Beer</span>
            </span>
          </div>
        </NavLink>
        <div className="flex flex-row items-center gap-3 w-auto" id="navbar-default">
          <BarSearch />
          {status === AuthenticationStatus.authenticated ? (
            <UserSection
              key={"user-active-section"}
              user={user}
              handleLogut={handledLogout}
            />
          ) : (
            <NotUserSection />
          )}
        </div>
      </div>
    </nav>
  );
}
