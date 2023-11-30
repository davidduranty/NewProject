import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import CardMoment from "../cards/CardMoment";

const SwiperSelectionMoment = () => {
  const [getMoment, setGetMoment] = useState([]);

  const getDataSelect = () => {
    axios
      .get("http://localhost:5172/moment")
      .then((el) => setGetMoment(el.data));
  };

  const getDataFilterMoment = async (search) => {
    await axios
      .get("http://localhost:5172/moment/")
      .then((el) =>
        setGetMoment(
          el.data.filter((element) =>
            element.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    getDataSelect();
  };

  return (
    <div>
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
        <ul className="caroussel">
          {getMoment.map((moment) => (
            <CardMoment key={moment.id} moment={moment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwiperSelectionMoment;
// const getDataSelect = () => {
//   axios
//     .get("http://localhost:3004/moment")
//     .then((el) => setGetMoment(el.data));
// };
