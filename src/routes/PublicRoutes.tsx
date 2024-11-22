import NavBar from "@/components/organisms/navBar/NavBar";
import { Homeview } from "@/views";
import { Route, Routes } from "react-router-dom";

export default function PublicRoutes() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Homeview/>} />
      </Routes>
    </div>
  );
}
