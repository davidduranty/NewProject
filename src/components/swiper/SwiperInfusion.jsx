import { useApi } from "../../data/Context";
import CardInfusion from "../cards/CardInfusion";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperInfusion() {
  const { getInfusion } = useApi();
  return (
    <>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {getInfusion.map((infusion) => (
              <SwiperSlide key={infusion.id}>
                <CardInfusion infusion={infusion} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </>
  );
}

export default SwiperInfusion;
