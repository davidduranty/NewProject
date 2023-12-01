import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";
import { ApiProvider } from "./data/Context";
import ArrowFixed from "./components/backTop/ArrowFixed";
function App() {
  return (
    <ApiProvider>
      <Navigation />

      <div>
        <Outlet />
      </div>
      <ArrowFixed />
      <Footer />
    </ApiProvider>
  );
}

export default App;
