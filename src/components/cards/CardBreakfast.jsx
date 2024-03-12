import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
const CardBreakfast = ({ breakfast }) => {
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
  return (
    <div className="card-container">
      <li>
        <img src={breakfast.img} alt={"Photo" + breakfast.name} />
        <h1>{breakfast.name}</h1>
        <h2>{breakfast.content}</h2>
        <div className="breakfast-add">
          <p>{breakfast.price.toFixed(2)} £</p>
          <div className="count-container-break">
            <button className="btn-less-break" onClick={handleDecrement}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more-break" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="container-break-icon">
            <p>{breakfast.icon}</p>
            <p>{breakfast.view}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

CardBreakfast.propTypes = {
  breakfast: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardBreakfast;
