import { useApi } from "../../data/Context";
import Modal from "../Modal";
import CardInfusion from "../cards/CardInfusion";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperInfusion() {
  const { getInfusion, showModal } = useApi();
  return (
    <>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {getInfusion.map((infusion) => (
              <SwiperSlide>
                <CardInfusion infusion={infusion} key={infusion.id} />
              </SwiperSlide>
            ))}
            {showModal && <Modal />}
          </Swiper>
        </ul>
      </div>
    </>
  );
}

export default SwiperInfusion;
