import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

const Card = ({ tea }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="card-container">
          <li key={tea.id}>
            <img src={tea.img} alt={"image" + tea.name} />
            <h1>{tea.name}</h1>
            <h2>{tea.content}</h2>
            <div className="priceAndBag">
              <p>{tea.price.toFixed(2)} / les 100 G</p>
              <div className="container-icon">
                <span>{tea.bag}</span>
                <span className="iconEye">{tea.view}</span>
              </div>
            </div>
          </li>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

Card.propTypes = {
  tea: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    bag: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
