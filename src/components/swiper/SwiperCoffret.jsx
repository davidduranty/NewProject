import axios from "axios";
import { useState, useEffect } from "react";
import CardCoffret from "../cards/CardCoffret";

function SwiperCoffret() {
  const [getCoffret, setGetCoffret] = useState([]);

  function dataCoffret() {
    axios
      .get("http://localhost:5172/coffret/")
      .then((res) => setGetCoffret(res.data));
  }

  useEffect(() => {
    dataCoffret();
  }, []);
  return (
    <>
      <div className="caroussel-container-box">
        <ul className="caroussel-box">
          {getCoffret.map((coffret) => (
            <CardCoffret key={coffret.id} coffret={coffret} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperCoffret;
