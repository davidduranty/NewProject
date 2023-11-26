import { Outlet } from "react-router-dom";
import Icons from "./components/navbar/Icons";
import Logo from "./components/navbar/Logo";
import Navigation from "./components/navbar/Navigation";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div>
        <Logo />
        <Navigation />
        <Icons />
      </div>

      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}

export default App;
