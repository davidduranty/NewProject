import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CardSachet({ sachet }) {
  const [apiBoites, setApiBoites] = useState([]);
  const [likeBoites, setLikeBoites] = useState(new Map());

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
        <h1 className="h1-box">{sachet.name}</h1>
        <h2 className="h2-box">{sachet.content}</h2>
        <div className="priceAndBag-box">
          <p>{sachet.price.toFixed(2)} / Boîte</p>
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
