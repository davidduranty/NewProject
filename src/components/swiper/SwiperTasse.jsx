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
  }, []);
  return (
    <div className="container-breakfast">
      <img src="photo-dej.webp" alt="petit dej" />
      {getTasse.map((tasse) => (
        <CardSmallDej key={tasse} tasse={tasse} />
      ))}
    </div>
  );
}

export default SwiperTasse;
