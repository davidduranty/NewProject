import CardMoment from "../cards/CardMoment";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import { useApi } from "../../data/Context";
import Modal from "../Modal";

const SwiperSelectionMoment = () => {
  const { getMoment, getDataFilterMoment, showModal } = useApi();
  const { t } = useTranslation();

  return (
    <>
      <div className="title-best-container">
        <div className="title-best">
          <h1>{t("title.moment")}</h1>
          <div className="container-moment-search">
            <img className="search-moment" src="search.png" alt="" />
            <input
              className="input-moment"
              type="text"
              placeholder={t("title.input")}
              onChange={(e) => getDataFilterMoment(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {getMoment.map((moment, index) => (
              <SwiperSlide>
                <CardMoment moment={moment} key={index} />
              </SwiperSlide>
            ))}
            {showModal && <Modal />}
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default SwiperSelectionMoment;
