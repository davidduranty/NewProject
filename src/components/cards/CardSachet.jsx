import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";

function CardSachet({ sachet }) {
  const [apiBoites, setApiBoites] = useState([]);
  const [likeBoites, setLikeBoites] = useState(new Map());
  const { handleClickLess, handleClickMore } = useApi();
  const [count, setCount] = useState(0);
  const isFrench = i18n.language === "fr";

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
  function onLike(name) {
    toogleFavorite(name);
    setReload(!reload);
  }
  return (
    <div className="card-container-box">
      <li className="li-box">
        <img className="img-box" src={sachet.img} alt={"image" + sachet.name} />
        <h1 className="h1-box">{isFrench ? sachet.name[0] : sachet.name[1]}</h1>
        <h2 className="h2-box">
          {isFrench ? sachet.content[0] : sachet.content[1]}
        </h2>
        <div className="priceAndBag-box">
          <p>
            {sachet.price.toFixed(2)} {isFrench ? "/ Boîte" : "/ Box"}
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
              onClick={() => onLike(sachet.name)}
            >
              {likeBoites.get(sachet.name) ? "❤️" : "🤍"}
            </button>
            <span>{sachet.icon}</span>
          </div>
        </div>
      </li>
    </div>
  );
}
CardSachet.propTypes = {
  sachet: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardSachet;
