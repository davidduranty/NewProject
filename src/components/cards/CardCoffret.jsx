import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useApi } from "../../data/Context";
function CardCoffret({ coffret }) {
  const [apiCoffret, setApiCoffret] = useState([]);
  const [likeCoffret, setLikeCoffret] = useState(new Map());
  const { handleClickLess, handleClickMore } = useApi();
  const [count, setCount] = useState(0);

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
  function onLike(name) {
    toogleFavorite(name);
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
        <h1 className="h1-box">{coffret.name}</h1>
        <h2 className="h2-box">{coffret.content}</h2>
        <div className="priceAndBag-box">
          <p>{coffret.price.toFixed(2)} / les 100 G</p>
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
              onClick={() => onLike(coffret.name)}
            >
              {likeCoffret.get(coffret.name) ? "❤️" : "🤍"}
            </button>
            <span>{coffret.icon}</span>
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
