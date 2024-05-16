import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
import ModalInfusion from "../../modal/ModalInfusionImg";
import i18n from "../../I18n";
import Modal from "../Modal";

const CardInfusion = ({ infusion }) => {
  const {
    handleClickLess,
    handleClickMore,
    incrementBagCount,
    addToBag,
    firstname,
    setShowModal,
    showModal,
  } = useApi();
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isFrench = i18n.language === "fr";
  const [showImg, setShowImg] = useState(false);

  function addBag(name, img, price) {
    addToBag({ name, img, price });
  }

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

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };
  const viewImage = () => {
    setShowImg(true);
  };
  return (
    <div className="card-container">
      <li>
        <img
          src={infusion.img}
          alt={"image" + infusion.name}
          onClick={handleModalToggle}
        />
        <h1>{isFrench ? infusion.name[0] : infusion.name[1]}</h1>
        <h2>{isFrench ? infusion.content[0] : infusion.content[1]}</h2>
        <div className="priceAndBag">
          <p>
            {infusion.price.toFixed(2)}{" "}
            {isFrench ? "/ les 100 G" : "/ the 100 G"}
          </p>
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
            {count > 0 && (
              <span
                onClick={() => {
                  if (!firstname) {
                    setShowModal(true);
                    return;
                  }
                  addBag(
                    isFrench ? infusion.name[0] : infusion.name[1],
                    infusion.img,
                    infusion.price * count
                  );
                  incrementBagCount();
                }}
              >
                {infusion.icon}
              </span>
            )}
            <span className="iconEye" onClick={viewImage}>
              {infusion.view}
            </span>
          </div>
        </div>
      </li>
      {showImg && (
        <div className="image-frame">
          <div className="title-iframe-container">
            <h1 className="h1-iframe">
              {isFrench ? infusion.name[0] : infusion.name[1]}
            </h1>
          </div>
          <img
            className="img-box"
            src={infusion.img}
            alt={"image" + infusion.name}
          />
          <div className="text-frame">
            <p>{isFrench ? infusion.text[0] : infusion.text[1]}</p>
          </div>
          <button className="btn-img" onClick={() => setShowImg(false)}>
            Fermer
          </button>
        </div>
      )}
      {showModal && <Modal />}
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
