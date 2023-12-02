import React from "react";
import { useEffect } from "react";
import ContentImg from "../components/pictureContainer/ContentImg";
import TeasBallsContainer from "../components/TeaBall/TeasBallsContainer";
import SwiperBest from "../components/swiper/SwiperBest";
import SwiperSelectionMoment from "../components/swiper/SwiperSelectionMoment";

function Home() {
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
      <ContentImg />
      <TeasBallsContainer />
      <SwiperBest />
      <SwiperSelectionMoment />
    </>
  );
}

export default Home;
