import PropTypes from "prop-types";
import { useState } from "react";
import { useApi } from "../../data/Context";
import i18n from "../../I18n";
import Modal from "../Modal";
import { useTranslation } from "react-i18next";

const CardSmallDej = ({ tasse }) => {
  const isFrench = i18n.language === "fr";
  const { t } = useTranslation();

  const {
    handleClickLess,
    handleClickMore,
    addToBag,
    incrementBagCount,
    firstname,
    setShowModal,
    showModal,
  } = useApi();
  const [count, setCount] = useState(0);
  // const [showImage, setShowImage] = useState(true);
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
  const viewImage = () => {
    setShowImg(true);
  };

  return (
    <div className="tasse-map">
      <li className="ul-settings">
        <img className="img-tasse" src={tasse.img} alt="Tasse Doman" />
        <h1>{isFrench ? tasse.name[0] : tasse.name[1]}</h1>
        <h2>{isFrench ? tasse.content[0] : tasse.content[1]}</h2>
        <div className="tasse-container-price">
          <div className="tasse-price-box">
            <p>{tasse.price.toFixed(2)} £</p>
          </div>
          <div className="count-container-tasse">
            <button className="btn-less" onClick={handleDecrement}>
              -
            </button>
            <span className="result">{count}</span>
            <button className="btn-more" onClick={handleIncrement}>
              +
            </button>
          </div>
          {count > 0 && (
            <p
              onClick={() => {
                if (!firstname) {
                  setShowModal(true);
                  return;
                }
                addBag(
                  isFrench ? tasse.name[0] : tasse.name[1],
                  tasse.img,
                  tasse.price * count
                );
                incrementBagCount();
              }}
            >
              {tasse.icon}
            </p>
          )}
          <p onClick={viewImage}>{tasse.view}</p>
        </div>
        {showImg && (
          <div className="image-tasse-frame">
            <div className="title-tasse-iframe-container">
              <h1 className="h1-tasse-iframe">
                {isFrench ? tasse.name[0] : tasse.name[1]}
              </h1>
            </div>
            <img
              className="img-tasse-box"
              src={tasse.img}
              alt={"image" + tasse.name}
            />
            <div className="text-tasse-frame">
              <p>{isFrench ? tasse.text[0] : tasse.text[1]}</p>
            </div>
            <button className="btn-tasse-img" onClick={() => setShowImg(false)}>
              {t("title.closeCard")}
            </button>
          </div>
        )}
      </li>
      {showModal && <Modal />}
    </div>
  );
};

CardSmallDej.propTypes = {
  tasse: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardSmallDej;
