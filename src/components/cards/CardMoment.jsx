import PropTypes from "prop-types";
import { useApi } from "../../data/Context";

const CardMoment = ({ moment }) => {
  const { count, handleClickLess, handleClickMore } = useApi();
  return (
    <div className="card-container">
      <li key={moment.id}>
        <img src={moment.img} alt={"Photo" + moment.name} />
        <h1>{moment.name}</h1>
        <h2>{moment.content}</h2>
        <div className="contenance">
          <div className="contenance-priceAndBag">
            <p>{moment.price.toFixed(2)}</p>
            <div className="count-container">
              <button className="btn-less" onClick={handleClickLess}>
                -
              </button>
              <span className="result">{count}</span>
              <button className="btn-more" onClick={handleClickMore}>
                +
              </button>
            </div>
            <h4>{moment.contenance}</h4>
          </div>
          <div className="contenance-container-icon">
            <span>{moment.bag}</span>
            <span className="iconEye">{moment.view}</span>
          </div>
        </div>
      </li>
    </div>
  );
};

CardMoment.propTypes = {
  moment: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    contenance: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bag: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardMoment;
