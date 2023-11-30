import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../cards/Card";
import { useApi } from "../../data/Context";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

// import "./styles.scss";

const SwiperBest = () => {
  const { tea, getData, getDataFilter } = useApi();
  const listRef = useRef();
  // const [teas, setTea] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(3);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const listNode = listRef.current;
  //   const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

  //   if (imgNode) {
  //     imgNode.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  //   getData();
  // }, [currentIndex]);

  // const scrollToImage = (direction) => {
  //   if (direction === "next") {
  //     setCurrentIndex((current) => {
  //       const isFirstSlide = currentIndex === 0;
  //       return isFirstSlide ? 0 : current - 1;
  //     });
  //   } else {
  //     const isLastSlide = currentIndex === teas.length - 1;
  //     if (!isLastSlide) {
  //       setCurrentIndex((current) => current + 1);
  //     }
  //   }
  // };

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
        {/* <span className="left" onClick={() => scrollToImage("next")}>
          &#8678;
        </span> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
          <ul className="caroussel" ref={listRef}>
            <SwiperSlide>
              {tea.map((tea) => (
                <Card tea={tea} key={tea.id} />
              ))}
            </SwiperSlide>
          </ul>
          {/* <span className="right" onClick={() => scrollToImage("prev")}>
          &#8680;
        </span> */}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperBest;
