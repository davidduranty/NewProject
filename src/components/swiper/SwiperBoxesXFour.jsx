import { useState, useEffect } from "react";
import CardBoxX from "../cards/CardBoxX";
import axios from "axios";

function SwiperBoxesXFour() {
  const [boxX, setBoxX] = useState([]);

  const boxXData = async () => {
    try {
      const res = await axios.get("http://localhost:5172/boites_suites");
      setBoxX(res.data);
    } catch (err) {
      console.error(err.res.data);
      setBoxX(undefined);
    }
  };
  useEffect(() => {
    boxXData();
  }, []);
  return (
    <>
      <div className="caroussel-container-box">
        <ul className="caroussel-box">
          {boxX.map((boxX) => (
            <CardBoxX boxX={boxX} key={boxX.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperBoxesXFour;
