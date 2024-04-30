import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";
import { ApiProvider } from "./data/Context";
import ArrowFixed from "./components/backTop/ArrowFixed";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ApiProvider>
      <Navigation />
      <div>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Outlet />
      </div>
      <ArrowFixed />
      <Footer />
    </ApiProvider>
  );
}

export default App;
