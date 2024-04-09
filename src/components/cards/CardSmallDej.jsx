import PropTypes from "prop-types";
import { useState } from "react";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

const CardSmallDej = ({ tasse }) => {
  const isFrench = i18n.language === "fr";

  const { handleClickLess, handleClickMore } = useApi();
  const [count, setCount] = useState(0);
  const [showImage, setShowImage] = useState(true);

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
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <ul className="ul-settings">
      {showImage && <img src={tasse.img} alt="Tasse Doman" />}
      <h1>{isFrench ? tasse.name[0] : tasse.name[1]}</h1>
      <h2>{isFrench ? tasse.content[0] : tasse.content[1]}</h2>
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
        <p>{tasse.icon}</p>
        <p onClick={toggleImage}>{tasse.view}</p>
      </div>
    </ul>
  );
};

CardSmallDej.propTypes = {
  tasse: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardSmallDej;
