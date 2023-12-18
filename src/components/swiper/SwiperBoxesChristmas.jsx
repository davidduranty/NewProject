import axios from "axios";
import { useEffect, useState } from "react";
import CardBoxesChristmas from "../cards/CardBoxesChristmas";

function SwiperBoxesChristmas() {
  const [getData, setGetData] = useState([]);

  const setData = async () => {
    try {
      const res = await axios.get("http://localhost:5172/boites");
      setGetData(res.data);
    } catch (err) {
      console.error(err.res.data);
      setGetData(undefined);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      <div className="caroussel-container-box">
        <ul className="caroussel-box">
          {getData.map((box) => (
            <CardBoxesChristmas box={box} key={box.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperBoxesChristmas;
