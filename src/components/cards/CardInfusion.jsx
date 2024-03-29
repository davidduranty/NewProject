import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
import ModalInfusion from "../../modal/ModalInfusionImg";

const CardInfusion = ({ infusion }) => {
  const { handleClickLess, handleClickMore } = useApi();
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="card-container">
      <li>
        <img
          src={infusion.img}
          alt={"image" + infusion.name}
          onClick={handleModalToggle}
        />
        <h1>{infusion.name}</h1>
        <h2>{infusion.content}</h2>
        <div className="priceAndBag">
          <p>{infusion.price.toFixed(2)} / les 100 G</p>
          <div className="count-container">
            <button className="btn-less" onClick={handleDecrement}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="container-icon">
            <span>{infusion.icon}</span>
            <span className="iconEye">{infusion.view}</span>
          </div>
        </div>
      </li>
      {modalOpen && <ModalInfusion onClick={handleModalClose} />}
      {modalOpen && (
        <div className="modal-background" onClick={handleModalToggle}></div>
      )}
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
