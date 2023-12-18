import PropTypes from "prop-types";
import { useEffect, useState } from "react";
function CardBoxX({ boxX }) {
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
        <img className="img-box" src={boxX.img} alt={"image" + boxX.name} />
        <h1 className="h1-box">{boxX.name}</h1>
        <h2 className="h2-box">{boxX.content}</h2>
        <div className="priceAndBag-box">
          <p>{boxX.price.toFixed(2)} 6 sachets</p>
          <div className="container-icon-box">
            <button
              className="btn-like-box"
              type="button"
              onClick={() => onLike(boxX.name)}
            >
              {likeBoites.get(boxX.name) ? "❤️" : "🤍"}
            </button>
            <span>{boxX.icon}</span>
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
