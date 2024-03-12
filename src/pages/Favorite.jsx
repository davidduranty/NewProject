import { useEffect, useState } from "react";
import { useApi } from "../data/Context";
// import PropTypes from "prop-types";

function Favorite() {
  const {
    favorites,
    toogleFavorite,
    handleClickLess,
    handleClickMore,
    count,
    getDej,
  } = useApi();

  const [reload, setReload] = useState(false);
  useEffect(() => {}, [reload]);
  const onLike = (name) => {
    toogleFavorite(name);
    setReload(!reload);
  };
  return (
    <ul className="ul-settings-select">
      {getDej.map((dej) => (
        <div key={dej.id}>
          <img src={dej.img} alt="" />
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
// Favorite.propTypes = {
//   dej: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     icon: PropTypes.string.isRequired,
//     view: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Favorite;
