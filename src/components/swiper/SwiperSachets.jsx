import axios from "axios";
import { useEffect, useState } from "react";
import CardSachet from "../cards/CardSachet";

function SwiperSachets() {
  const [sachet, setSachet] = useState([]);

  const sachetData = async () => {
    try {
      const res = await axios.get("http://localhost:5172/sachet");
      setSachet(res.data);
    } catch (err) {
      console.error(err.res.data);
      setSachet(undefined);
    }
  };
  useEffect(() => {
    sachetData();
  }, []);
  return (
    <>
      <div className="caroussel-container-box">
        <ul className="caroussel-box">
          {sachet.map((sachet) => (
            <CardSachet sachet={sachet} key={sachet.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperSachets;
