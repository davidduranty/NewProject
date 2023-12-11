import PropTypes from "prop-types";
const CardInfusion = ({ infusion }) => {
  return (
    <div className="card-container">
      <li key={infusion.id}>
        <img src={infusion.img} alt={"image" + infusion.name} />
        <h1>{infusion.name}</h1>
        <h2>{infusion.content}</h2>
        <div className="priceAndBag">
          <p>{infusion.price.toFixed(2)} / les 100 G</p>
          <div className="container-icon">
            <span>{infusion.icon}</span>
            <span className="iconEye">{infusion.view}</span>
          </div>
        </div>
      </li>
    </div>
  );
};
CardInfusion.propTypes = {
  infusion: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default CardInfusion;
