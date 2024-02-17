import CardMoment from "../cards/CardMoment";
import { Swiper, SwiperSlide } from "swiper/react";

import { useApi } from "../../data/Context";

const SwiperSelectionMoment = () => {
  const { getMoment, getDataFilterMoment } = useApi();

  return (
    <>
      <div className="title-best-container">
        <div className="title-best">
          <h1>S&#201;LECTION DU MOMENT</h1>
          <div className="container-moment-search">
            <img className="search-moment" src="search.png" alt="" />
            <input
              className="input-moment"
              type="text"
              placeholder="Recherche"
              onChange={(e) => getDataFilterMoment(e.target.value)}
            />
          </div>
        </div>
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
