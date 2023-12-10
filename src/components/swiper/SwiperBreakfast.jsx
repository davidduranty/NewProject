import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";

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
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {shop.map((breakfast) => (
              <SwiperSlide key={breakfast.id}>
                <CardBreakfast breakfast={breakfast} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default SwiperBreakfast;
