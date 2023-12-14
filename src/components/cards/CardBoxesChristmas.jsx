import PropTypes from "prop-types";

function CardBoxesChristmas({ box }) {
  return (
    <div className="card-container-box">
      <li className="li-box">
        <img className="img-box" src={box.img} alt={"image" + box.name} />
        <h1 className="h1-box">{box.name}</h1>
        <h2 className="h2-box">{box.content}</h2>
        <div className="priceAndBag-box">
          <p>{box.price.toFixed(2)} / les 100 G</p>
          <div className="container-icon">
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
