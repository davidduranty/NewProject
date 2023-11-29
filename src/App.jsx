import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";
import { ApiProvider } from "./data/Context";
function App() {
  return (
    <ApiProvider>
      <Navigation />

      <div>
        <Outlet />
      </div>
      <Footer />
    </ApiProvider>
  );
}

export default App;
