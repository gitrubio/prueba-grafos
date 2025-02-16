
import { Provider } from "react-redux";
import { store } from "@/store";
import SkillTreeComponent from "@/views/MinecraftSkillTree";

function App() {
  return (
      <Provider store={store}>
        <SkillTreeComponent/>
      </Provider>
  );
}

export default App;
