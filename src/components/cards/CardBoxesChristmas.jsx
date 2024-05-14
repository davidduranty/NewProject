import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardBoxesChristmas({ box }) {
  const [apiBoites, setApiBoites] = useState([]);
  const [likeBoites, setLikeBoites] = useState(new Map());

  const {
    handleClickLess,
    handleClickMore,
    addToBag,
    incrementBagCount,
    addToFavorites,
    incrementFavoriteCount,
    firstname,
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
    likeBoites.set(name, likeBoites.has(name) ? !likeBoites.get(name) : true); // fonction favorite

    setLikeBoites(likeBoites);
    setApiBoites(apiBoites);
  }

  const [reload, setReload] = useState(false);

  useEffect(() => {}, [reload]);
  function onLike(name, img) {
    addToFavorites({ name, img });
    toogleFavorite(name);
    setReload(!reload);
  }
  return (
    <div className="card-container-box">
      <li className="li-box">
        <img className="img-box" src={box.img} alt={"image" + box.name} />
        <h1 className="h1-box">{isFrench ? box.name[0] : box.name[1]}</h1>
        <h2 className="h2-box">{isFrench ? box.content[0] : box.content[1]}</h2>
        <div className="priceAndBag-box">
          <p>
            {box.price.toFixed(2)} {isFrench ? "/ les 100 G " : "/ the 100 G"}
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
                if (!firstname) {
                  alert("Vous devez avoir un compte actif");
                  return;
                }
                onLike(isFrench ? box.name[0] : box.name[1], box.img);
                incrementFavoriteCount();
              }}
            >
              {likeBoites.get(box.name) ? "❤️" : "🤍"}
            </button>
            {count > 0 && (
              <span
                onClick={() => {
                  addBag(box.name[0], box.img, box.price * count);
                  incrementBagCount();
                }}
              >
                {box.icon}
              </span>
            )}
          </div>
        </div>
      </li>
    </div>
  );
}
CardBoxesChristmas.propTypes = {
  box: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardBoxesChristmas;
