import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import imagefour from "../../src/styles/img/img4.png";
import { Link } from "react-router-dom";
import SwiperInfusion from "../components/swiper/SwiperInfusion";
import SwiperCoffret from "../components/swiper/SwiperCoffret";
import SwiperBoxesChristmas from "../components/swiper/SwiperBoxesChristmas";
import SwiperBoxesXFour from "../components/swiper/SwiperBoxesXFour";
import SwiperSachets from "../components/swiper/SwiperSachets";

function Decouverte() {
  const { t } = useTranslation();

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
      <div className="smallBreakfast">
        <Link to="/home">
          <p>{t("title.home")}</p>
        </Link>
        <h1>{t("title.discovery")}</h1>
        <img src={imagefour} alt="petit dej" />
      </div>
      <div className="textContainer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          culpa illum veritatis tempora vitae perspiciatis praesentium porro
          possimus, recusandae laboriosam repellat dignissimos voluptatem
          consequatur laborum error nisi vel beatae ducimus facilis, quibusdam a
          cum qui?
        </p>
      </div>
      <h1 className="title-infusion">{t("title.infusion")}</h1>
      <SwiperInfusion />
      <div className="coffret-title">
        <h2>{t("title.coffret")}</h2>
      </div>
      <SwiperCoffret />
      <div className="coffret-title">
        <h1>{t("title.boxes")}</h1>
      </div>
      <SwiperBoxesChristmas />
      <div className="text-decouverte">
        <p>{t("title.text-long")}</p>
      </div>
      <SwiperBoxesXFour />
      <div className="coffret-title">
        <h1>{t("title.bag")}</h1>
      </div>
      <SwiperSachets />
    </>
  );
}

export default Decouverte;
