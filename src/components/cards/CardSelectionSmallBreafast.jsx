import { useState } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardSelectionSmallBreafast({ dej }) {
  const {
    handleClickLess,
    handleClickMore,
    incrementBagCount,
    // favorites,
    // toogleFavorite,
    addToBag,
    addToFavorites,
  } = useApi();
  const isFrench = i18n.language === "fr";
  const [showImg, setShowImg] = useState(false);

  const [count, setCount] = useState(0);

  function addBag(name, img, price) {
    addToBag({ name, img, price });
  }

  function onLike(name, img) {
    addToFavorites({ name, img });
  }

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

  const viewImage = () => {
    setShowImg(true);
  };
  return (
    // <ul >

    <div className="ul-settings-select">
      <img src={dej.img} alt={"Thé" + dej.name} />
      <h1>{isFrench ? dej.name[0] : dej.name[1]}</h1>
      <h2>{isFrench ? dej.content[0] : dej.content[1]}</h2>
      <div className="breakfast-add">
        <p>
          {dej.price.toFixed(2)} /{isFrench ? "Les 100g" : "The 100g"}
        </p>
        <div className="count-container-small-break">
          <button className="btn-less-small-break" onClick={handleDecrement}>
            -
          </button>
          <span className="result">{count}</span>
          <button className="btn-more-small-break" onClick={handleIncrement}>
            +
          </button>
        </div>
        {/* "❤️" */}
        <div>
          <button
            className="btn-like"
            type="button"
            onClick={() => onLike(dej.name[0], dej.img)}
          >
            🤍
          </button>
          {count > 0 && (
            <p
              onClick={() => {
                addBag(dej.name[0], dej.img, dej.price * count);
                incrementBagCount();
              }}
            >
              {dej.icon}
            </p>
          )}
          <p onClick={viewImage}>{dej.view}</p>
        </div>
      </div>
      {showImg && (
        <div className="image-selection-frame">
          <div className="title-selection-iframe-container">
            <h1 className="h1-selection-iframe">
              {isFrench ? dej.name[0] : dej.name[1]}
            </h1>
          </div>
          <img
            className="img-selection-box"
            src={dej.img}
            alt={"image" + dej.name}
          />
          <div className="text-selection-frame">
            <p>{isFrench ? dej.text[0] : dej.text[1]}</p>
          </div>
          <button
            className="btn-selection-img"
            onClick={() => setShowImg(false)}
          >
            Fermer
          </button>
        </div>
      )}
    </div>

    // </ul>
  );
}

CardSelectionSmallBreafast.propTypes = {
  dej: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardSelectionSmallBreafast;
