import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import CardBreakfast from "../cards/CardBreakfast";
const SwiperBreakfast = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5172/shopping")
      .then((res) => setShop(res.data));
  }, []);
  return (
    <>
      <h1 className="breakfast-title">BreakFast</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {shop.map((breakfast) => (
          <SwiperSlide className="swiper" key={breakfast.id}>
            <CardBreakfast breakfast={breakfast} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperBreakfast;
