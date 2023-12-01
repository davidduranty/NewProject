import React from "react";
import { useEffect } from "react";
import TitleImgTextIce from "../components/pictureContainer/TitleImgTextIce";

function Glace() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        document.querySelector(".arrow-fixed").classList.add("active");
      } else {
        document.querySelector(".arrow-fixed").classList.remove("active");
      }
    });
  }, []);
  return <TitleImgTextIce />;
}

export default Glace;
