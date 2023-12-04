import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/css/navigation";
import "swiper/scss/pagination";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
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
        <Swiper
          slidesPerView={2.7}
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
            {shop.map((breakfast) => (
              <SwiperSlide key={breakfast.id}>
                <CardBreakfast breakfast={breakfast} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperBreakfast;
