import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useApi } from "../../data/Context";

function CardBoxesChristmas({ box }) {
  const [apiBoites, setApiBoites] = useState([]);
  const [likeBoites, setLikeBoites] = useState(new Map());
  const { count, handleClickLess, handleClickMore } = useApi();

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
        <img className="img-box" src={box.img} alt={"image" + box.name} />
        <h1 className="h1-box">{box.name}</h1>
        <h2 className="h2-box">{box.content}</h2>
        <div className="priceAndBag-box">
          <p>{box.price.toFixed(2)} / les 100 G</p>
          <div className="count-container">
            <button className="btn-less" onClick={handleClickLess}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more" onClick={handleClickMore}>
              +
            </button>
          </div>
          <div className="container-icon-box">
            <button
              className="btn-like-box"
              type="button"
              onClick={() => onLike(box.name)}
            >
              {likeBoites.get(box.name) ? "❤️" : "🤍"}
            </button>
            <span>{box.icon}</span>
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
