import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import CardMoment from "../cards/CardMoment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
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
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
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
            {getMoment.map((moment) => (
              <SwiperSlide key={moment.id}>
                <CardMoment moment={moment} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSelectionMoment;