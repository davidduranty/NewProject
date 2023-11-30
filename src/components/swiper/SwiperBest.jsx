import React, { useEffect } from "react";
import Card from "../cards/Card";
import { useApi } from "../../data/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const SwiperBest = () => {
  const { tea, getDataFilter } = useApi();

  return (
    <>
      <div className="title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
        <img src="search.png" alt="" />
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => getDataFilter(e.target.value)}
        />
      </div>
      <div className="caroussel-container">
        <Swiper
          slidesPerView={3.7}
          spaceBetween={400}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <ul className="caroussel">
            {tea.map((tea) => (
              <SwiperSlide key={tea.id}>
                <Card tea={tea} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperBest;
