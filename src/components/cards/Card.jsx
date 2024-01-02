import PropTypes from "prop-types";
import { useApi } from "../../data/Context";

const Card = ({ tea }) => {
  const { count, handleClickLess, handleClickMore } = useApi();
  return (
    <div className="card-container">
      <li key={tea.id}>
        <img src={tea.img} alt={"image" + tea.name} />
        <h1>{tea.name}</h1>
        <h2>{tea.content}</h2>
        <div className="priceAndBag">
          <p>{tea.price.toFixed(2)} / les 100 G</p>
          <div className="count-container">
            <button className="btn-less" onClick={handleClickLess}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more" onClick={handleClickMore}>
              +
            </button>
          </div>
          <div className="container-icon">
            <span>{tea.bag}</span>
            <span className="iconEye">{tea.view}</span>
          </div>
        </div>
      </li>
    </div>
  );
};

Card.propTypes = {
  tea: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    bag: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
