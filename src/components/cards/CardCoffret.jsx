import PropTypes from "prop-types";
function CardCoffret({ coffret }) {
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
          <div className="container-icon">
            <span>{coffret.icon}</span>
            <span className="iconEye">{coffret.view}</span>
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
    view: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default CardCoffret;
