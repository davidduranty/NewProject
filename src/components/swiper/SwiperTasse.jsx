import { useEffect, useState } from "react";
import CardSmallDej from "../cards/CardSmallDej";
import axios from "axios";

function SwiperTasse() {
  const [getTasse, setGetTasse] = useState([]);
  const getDataTasse = () => {
    axios
      .get("http://localhost:5172/tasse")
      .then((res) => setGetTasse(res.data));
  };
  useEffect(() => {
    getDataTasse();
  }, [getTasse]);
  return (
    <div className="container-breakfast">
      <img src="photo-dej.webp" alt="petit dej" />
      <div className="tasse-map">
        {getTasse.map((tasse) => (
          <CardSmallDej key={tasse.id} tasse={tasse} />
        ))}
      </div>
    </div>
  );
}

export default SwiperTasse;
