import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardBoxX({ boxX }) {
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
        <img className="img-box" src={boxX.img} alt={"image" + boxX.name} />
        <h1 className="h1-box">{isFrench ? boxX.name[0] : boxX.name[1]}</h1>
        <h2 className="h2-box">
          {isFrench ? boxX.content[0] : boxX.content[1]}
        </h2>
        <div className="priceAndBag-box">
          <p>
            {boxX.price.toFixed(2)}
            {isFrench ? "/ Les 6 sachets" : "/ The 6 bags"}{" "}
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
                onLike(boxX.name[0], boxX.img);
                incrementFavoriteCount();
              }}
            >
              {likeBoites.get(boxX.name) ? "❤️" : "🤍"}
            </button>
            {count > 0 && (
              <span
                onClick={() => {
                  if (!firstname) {
                    alert("Vous devez avoir un compte actif");
                    return;
                  }
                  addBag(
                    isFrench ? boxX.name[0] : boxX.name[1],
                    boxX.img,
                    boxX.price * count
                  );
                  incrementBagCount();
                }}
              >
                {boxX.icon}
              </span>
            )}
          </div>
        </div>
      </li>
    </div>
  );
}

CardBoxX.propTypes = {
  boxX: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardBoxX;
