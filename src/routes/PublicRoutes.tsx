import NavBar from "@/components/organisms/navBar/NavBar";
import { CockTailView, Homeview, SearchView } from "@/views";
import { Route, Routes } from "react-router-dom";
import { IngredientView } from '../views/IngredientView';

export default function PublicRoutes() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Homeview/>} />
        <Route path="/cocktail/:id" element={<CockTailView/>} />
        <Route path="/ingredient/:ingredientID" element={<IngredientView/>} />
        <Route path="/search/:item" element={<SearchView/>} />
      </Routes>
    </div>
  );
}
