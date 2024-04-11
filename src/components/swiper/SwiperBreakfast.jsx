import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";

import CardBreakfast from "../cards/CardBreakfast";
const SwiperBreakfast = () => {
  const { t } = useTranslation();

  const [shop, setShop] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5172/shopping")
      .then((res) => setShop(res.data));
  }, []);
  return (
    <>
      <h1 className="breakfast-title">{t("title.break")}</h1>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {shop.map((breakfast) => (
              <SwiperSlide>
                <CardBreakfast breakfast={breakfast} key={breakfast.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default SwiperBreakfast;
