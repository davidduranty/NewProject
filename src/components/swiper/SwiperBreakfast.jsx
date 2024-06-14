import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";

import CardBreakfast from "../cards/CardBreakfast";
import Modal from "../Modal";
import { useApi } from "../../data/Context";
const SwiperBreakfast = () => {
  const { t } = useTranslation();
  const { showModal } = useApi();
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
            {shop.map((breakfast, index) => (
              <SwiperSlide>
                <CardBreakfast breakfast={breakfast} key={index} />
              </SwiperSlide>
            ))}
            {showModal && <Modal />}
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default SwiperBreakfast;
