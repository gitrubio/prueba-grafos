import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import AlertProvider from "./components/providers/AlertsProviders";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <AlertProvider/>
        <AppRoutes />
      </Provider>
    </Router>
  );
}

export default App;
