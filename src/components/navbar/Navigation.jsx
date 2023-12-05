import React, { useState } from "react";
import Logo from "./Logo";
import Icons from "./Icons";
import TeaInfusion from "../liens-navbar/TeaInfusion";
import BoiteSachets from "../liens-navbar/BoiteSachets";
import CoffretKdo from "../liens-navbar/CoffretKdo";
import Accessoires from "../liens-navbar/Accessoires";
import FamillyTeas from "../liens-navbar/FamillyTeas";

function Navigation() {
  const [showInfusion, setShowInfusion] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showAccessoiries, setShowAccessoiries] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  return (
    <div className="navigation-container">
      <Logo />
      <ul className="ul">
        <li className="li" onClick={() => setShowInfusion(!showInfusion)}>
          THÉS & INFUSIONS
        </li>
        <li className="li" onClick={() => setShowBox(!showBox)}>
          BOITES & SACHETS
        </li>
        <li className="li" onClick={() => setShowPresent(!showPresent)}>
          COFFRETS & CADEAUX
        </li>
        <li
          className="li"
          onClick={() => setShowAccessoiries(!showAccessoiries)}
        >
          ACCESSOIRES
        </li>
        <li className="li">GOURMANDISES</li>
        <li className="li" onClick={() => setShowFamily(!showFamily)}>
          DOMAN
        </li>
        {showInfusion && <TeaInfusion />}
        {showBox && <BoiteSachets />}
        {showPresent && <CoffretKdo />}
        {showAccessoiries && <Accessoires />}
        {showFamily && <FamillyTeas />}
      </ul>
      <Icons />
    </div>
  );
}

export default Navigation;
