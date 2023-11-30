import React from "react";
import ContentImg from "../components/pictureContainer/ContentImg";
import TeasBallsContainer from "../components/TeaBall/TeasBallsContainer";
import SwiperBest from "../components/swiper/SwiperBest";
import SwiperSelectionMoment from "../components/swiper/SwiperSelectionMoment";
function Home() {
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
