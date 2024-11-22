import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthGuard from "@/guards/AuthGuard";
import {LoginView, RegisterView} from "@/views";

export const AppRoutes = () => {
  /* const status = useCheckAuth(); */

  return (
    <div>
      <Routes>
        <Route path="/*" element={<PublicRoutes/>} />
        <Route element={<AuthGuard redirectTo='/' />}>
          <Route path="/login" element={<LoginView/>} />
          <Route path="/register" element={<RegisterView/>} />
        </Route>
      </Routes>
    </div>
  );
};
