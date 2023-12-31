import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useApi } from "../../data/Context";

function CardSelectionSmallBreafast() {
  // const [api, setApi] = useState([]);
  // const [favorites, setFavorites] = useState(new Map());
  const {
    count,
    handleClickLess,
    handleClickMore,
    favorites,
    toogleFavorite,
    getDej,
  } = useApi();

  // async function toogleFavorite(name) {
  //   favorites.set(name, favorites.has(name) ? !favorites.get(name) : true); // fonction favorite

  //   setFavorites(favorites);
  //   setApi(api);
  // }

  const [reload, setReload] = useState(false);

  useEffect(() => {}, [reload]);
  function onLike(name) {
    toogleFavorite(name);
    setReload(!reload);
  }
  return (
    <ul className="ul-settings-select">
      {getDej.map((dej) => (
        <div key={dej}>
          <img src={dej.img} alt={"Thé" + dej.name} />
          <h1>{dej.name}</h1>
          <h2>{dej.content}</h2>
          <div className="breakfast-add">
            <p>{dej.price.toFixed(2)} / Les 100g</p>
            <div className="count-container">
              <button className="btn-less" onClick={handleClickLess}>
                -
              </button>
              <span className="result">{count}</span>
              <button className="btn-more" onClick={handleClickMore}>
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
      ))}
    </ul>
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
