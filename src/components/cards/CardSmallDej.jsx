import axios from "axios";
import { useEffect, useState } from "react";
import { useApi } from "../../data/Context";

const TassesSmallDej = () => {
  const [getTasse, setGetTasse] = useState([]);
  const { handleClickLess, handleClickMore } = useApi();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    handleClickMore();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      handleClickLess();
    }
  };

  const getDataTasse = () => {
    axios.get("http://localhost:5172/dej").then((res) => setGetTasse(res.data));
  };
  useEffect(() => {
    getDataTasse();
  }, []);
  return (
    <div className="container-breakfast">
      <img src="photo-dej.webp" alt="Petit dej" />
      <div className="tasse-map">
        {getTasse.map((tasse) => (
          <ul className="ul-settings" key={tasse.id}>
            <img src={tasse.img} alt="Tasse Doman" />
            <h1>{tasse.name}</h1>
            <h2>{tasse.content}</h2>
            <div className="tasse-container-price">
              <div className="tasse-price-box">
                <p>{tasse.price.toFixed(2)} £</p>
              </div>
              <div className="count-container-tasse">
                <button className="btn-less" onClick={handleDecrement}>
                  -
                </button>
                <span className="result">{count}</span>
                <button className="btn-more" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TassesSmallDej;
