import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Navigation />
      <Footer />

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
