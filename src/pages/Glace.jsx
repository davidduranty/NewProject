import { useEffect } from "react";
import TitleImgTextIce from "../components/pictureContainer/TitleImgTextIce";
import CardSmallDej from "../components/cards/CardSmallDej";
import SwiperSelectionSmallBreakfast from "../components/swiper/swiperSelectionSmallBreakfast";
import SwiperBreakfast from "../components/swiper/SwiperBreakfast";

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
      <CardSmallDej />
      <SwiperSelectionSmallBreakfast />
      <SwiperBreakfast />
    </>
  );
}

export default Glace;
