import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";

function Navigation() {
  return (
    <div className="navigation-container">
      <Logo />
      <ul className="ul">
        <li className="li">THÉS & INFUSIONS</li>
        <li className="li">BOITES & SACHETS</li>
        <li className="li">COFFRETS & CADEAUX</li>
        <li className="li">ACCESSOIRES</li>
        <li className="li">GOURMANDISES</li>
        <li className="li">DOMAN</li>
      </ul>
      <Icons />
    </div>
  );
}

export default Navigation;
