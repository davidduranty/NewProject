import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardSelectionSmallBreafast({ dej }) {
  const { handleClickLess, handleClickMore, favorites, toogleFavorite } =
    useApi();
  const isFrench = i18n.language === "fr";

  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {}, [reload]);
  function onLike(name) {
    toogleFavorite(name);
    setReload(!reload);
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
  return (
    // <ul >
    <>
      <div className="ul-settings-select">
        <img src={dej.img} alt={"Thé" + dej.name} />
        <h1>{isFrench ? dej.name[0] : dej.name[1]}</h1>
        <h2>{isFrench ? dej.content[0] : dej.content[1]}</h2>
        <div className="breakfast-add">
          <p>{dej.price.toFixed(2)} / Les 100g</p>
          <div className="count-container-small-break">
            <button className="btn-less-small-break" onClick={handleDecrement}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more-small-break" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div>
            <button
              className="btn-like"
              type="button"
              onClick={() => onLike(dej.name)}
            >
              {favorites.get(dej.name) ? "❤️" : "🤍"}
            </button>
            <p>{dej.icon}</p>
            <p>{dej.view}</p>
          </div>
        </div>
      </div>
    </>
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
