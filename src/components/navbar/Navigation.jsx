import { useRef, useState, useEffect } from "react";
import Logo from "./Logo";
import Icons from "./Icons";
import TeaInfusion from "../liens-navbar/TeaInfusion";
import BoiteSachets from "../liens-navbar/BoiteSachets";
import CoffretKdo from "../liens-navbar/CoffretKdo";
import Accessoires from "../liens-navbar/Accessoires";
import FamillyTeas from "../liens-navbar/FamillyTeas";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import Burger from "./Burger";

function Navigation() {
  const { t } = useTranslation();
  const [showInfusion, setShowInfusion] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showAccessoiries, setShowAccessoiries] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowInfusion(false);
        setShowBox(false);
        setShowPresent(false);
        setShowAccessoiries(false);
        setShowFamily(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="navigation-container">
      <Burger />
      <Logo />
      <ul className="ul" ref={menuRef}>
        <li className="li" onClick={() => setShowInfusion(!showInfusion)}>
          {t("navbar.Teas & infusions")}
        </li>
        <li className="li" onClick={() => setShowBox(!showBox)}>
          {t("navbar.boxes and bags")}
        </li>
        <li className="li" onClick={() => setShowPresent(!showPresent)}>
          {t("navbar.gift & boxes")}
        </li>
        <li
          className="li"
          onClick={() => setShowAccessoiries(!showAccessoiries)}
        >
          {t("navbar.accessories")}
        </li>
        <li className="li">{t("navbar.delicacies")}</li>
        <li className="li" onClick={() => setShowFamily(!showFamily)}>
          {t("navbar.doman")}
        </li>
        {showInfusion && <TeaInfusion />}
        {showBox && <BoiteSachets />}
        {showPresent && <CoffretKdo />}
        {showAccessoiries && <Accessoires />}
        {showFamily && <FamillyTeas />}
      </ul>
      <Language />
      <Icons />
    </div>
  );
}

export default Navigation;
