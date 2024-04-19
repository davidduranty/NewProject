import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardCoffret({ coffret }) {
  const [apiCoffret, setApiCoffret] = useState([]);
  const [likeCoffret, setLikeCoffret] = useState(new Map());
  const {
    handleClickLess,
    handleClickMore,
    addToBag,
    incrementBagCount,
    incrementFavoriteCount,
    addToFavorites,
  } = useApi();
  const [count, setCount] = useState(0);
  const isFrench = i18n.language === "fr";

  function addBag(name, img, price) {
    addToBag({ name, img, price });
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

  async function toogleFavorite(name) {
    likeCoffret.set(
      name,
      likeCoffret.has(name) ? !likeCoffret.get(name) : true
    ); // fonction favorite

    setLikeCoffret(likeCoffret);
    setApiCoffret(apiCoffret);
  }

  const [reload, setReload] = useState(false);

  useEffect(() => {}, [reload]);
  function onLike(name, img) {
    addToFavorites({ name, img });
    toogleFavorite(name, img);
    setReload(!reload);
  }
  return (
    <div className="card-container-box">
      <li className="li-box">
        <img
          className="img-box"
          src={coffret.img}
          alt={"image" + coffret.name}
        />
        <h1 className="h1-box">
          {isFrench ? coffret.name[0] : coffret.name[1]}
        </h1>
        <h2 className="h2-box">
          {isFrench ? coffret.content[0] : coffret.content[1]}
        </h2>
        <div className="priceAndBag-box">
          <p>
            {coffret.price.toFixed(2)}{" "}
            {isFrench ? "/ les 100 G" : "/ the 100 G"}
          </p>
          <div className="count-container">
            <button className="btn-less" onClick={handleDecrement}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="container-icon-box">
            <button
              className="btn-like-box"
              type="button"
              onClick={() => {
                onLike(coffret.name[0], coffret.img);
                incrementFavoriteCount();
              }}
            >
              {likeCoffret.get(coffret.name) ? "❤️" : "🤍"}
            </button>
            {count > 0 && (
              <span
                onClick={() => {
                  addBag(coffret.name[0], coffret.img, coffret.price * count);
                  incrementBagCount();
                }}
              >
                {coffret.icon}
              </span>
            )}
          </div>
        </div>
      </li>
    </div>
  );
}
CardCoffret.propTypes = {
  coffret: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default CardCoffret;
