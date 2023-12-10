import CardMoment from "../cards/CardMoment";
import { Swiper, SwiperSlide } from "swiper/react";

import { useApi } from "../../data/Context";

const SwiperSelectionMoment = () => {
  const { getMoment, getDataFilterMoment } = useApi();

  return (
    <>
      <div className="title">
        <h1>S&#201;LECTION DU MOMENT</h1>
        <img src="search.png" alt="" />
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => getDataFilterMoment(e.target.value)}
        />
      </div>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {getMoment.map((moment) => (
              <SwiperSlide key={moment.id}>
                <CardMoment moment={moment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default SwiperSelectionMoment;
