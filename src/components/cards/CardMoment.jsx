import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
import i18n from "../../I18n";

const CardMoment = ({ moment }) => {
  const isFrench = i18n.language === "fr";

  const { handleClickLess, handleClickMore, addToBag, incrementBagCount } =
    useApi();
  const [count, setCount] = useState(0);
  const [showImg, setShowImg] = useState(false);

  function addBag(name, img, price) {
    addToBag({ name, img, price });
  }

  const handleIncrement = () => {
    setCount(count + 1);
    handleClickMore();
  };

  const viewImage = () => {
    setShowImg(true);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      handleClickLess();
    }
  };
  return (
    <div className="card-container">
      <li key={moment.id}>
        <img src={moment.img} alt={"Photo" + moment.name} />
        <h1>{isFrench ? moment.name[0] : moment.name[1]}</h1>
        <h2>{isFrench ? moment.content[0] : moment.content[1]}</h2>
        <div className="contenance">
          <div className="contenance-priceAndBag">
            <p>{moment.price.toFixed(2)}</p>
            <h4>{isFrench ? moment.contenance[0] : moment.contenance[1]}</h4>
            <div className="count-container">
              <button className="btn-less" onClick={handleDecrement}>
                -
              </button>
              <span className="result">{count}</span>
              <button className="btn-more" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="contenance-container-icon">
            {count > 0 && (
              <span
                onClick={() => {
                  addBag(
                    isFrench ? moment.name[0] : moment.name[1],
                    moment.img,
                    moment.price * count
                  );
                  incrementBagCount();
                }}
              >
                {moment.bag}
              </span>
            )}
            <span className="iconEye" onClick={viewImage}>
              {moment.view}
            </span>
          </div>
        </div>
      </li>
      {showImg && (
        <div className="image-frame">
          <div className="title-iframe-container">
            <h1 className="h1-iframe">
              {isFrench ? moment.name[0] : moment.name[1]}
            </h1>
          </div>
          <img
            className="img-box"
            src={moment.img}
            alt={"image" + moment.name}
          />
          <div className="text-frame">
            <p>{isFrench ? moment.text[0] : moment.text[1]}</p>
          </div>
          <button className="btn-img" onClick={() => setShowImg(false)}>
            Fermer
          </button>{" "}
        </div>
      )}
    </div>
  );
};

CardMoment.propTypes = {
  moment: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    contenance: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bag: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardMoment;
