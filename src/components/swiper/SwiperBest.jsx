import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../cards/Card";
import { useApi } from "../../data/Context";

const SwiperBest = () => {
  const { tea, getData } = useApi();
  const listRef = useRef();
  // const [teas, setTea] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(3);

  const getDataFilter = async (word) => {
    await axios.get("http://localhost:3004/thes/").then((res) => {
      setTea(
        res.data.filter((element) =>
          element.name.toLowerCase().includes(word.toLowerCase())
        )
      );
    });
  };

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
    <div>
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
        <span className="left" onClick={() => scrollToImage("next")}>
          &#8678;
        </span>
        <ul className="caroussel" ref={listRef}>
          {tea.map((tea) => (
            <Card tea={tea} key={tea.id} />
          ))}
        </ul>
        <span className="right" onClick={() => scrollToImage("prev")}>
          &#8680;
        </span>
      </div>
    </div>
  );
};

export default SwiperBest;
