import { useEffect } from "react";
import TitleImgTextIce from "../components/pictureContainer/TitleImgTextIce";

import SwiperSelectionSmallBreakfast from "../components/swiper/swiperSelectionSmallBreakfast";
import SwiperBreakfast from "../components/swiper/SwiperBreakfast";
import SwiperTasse from "../components/swiper/SwiperTasse";

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
  return (
    <>
      <TitleImgTextIce />
      <SwiperTasse />
      <SwiperSelectionSmallBreakfast />
      <SwiperBreakfast />
    </>
  );
}

export default Glace;
