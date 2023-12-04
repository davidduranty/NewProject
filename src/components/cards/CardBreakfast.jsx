import React from "react";
import PropTypes from "prop-types";
const CardBreakfast = ({ breakfast }) => {
  return (
    <div className="card-container">
      <li>
        <img src={breakfast.img} alt={"Photo" + breakfast.name} />
        <h1>{breakfast.name}</h1>
        <h2>{breakfast.content}</h2>
        <div className="breakfast-add">
          <p>{breakfast.price.toFixed(2)} £</p>
          <div>
            <p>{breakfast.icon}</p>
            <p>{breakfast.view}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

CardBreakfast.prototype = {
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
