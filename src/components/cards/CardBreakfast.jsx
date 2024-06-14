import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
import i18n from "../../I18n";
import { useTranslation } from "react-i18next";

const CardBreakfast = ({ breakfast }) => {
  const isFrench = i18n.language === "fr";
  const { t } = useTranslation();

  const [showImg, setShowImg] = useState(false);

  const { addToBag, incrementBagCount, setShowModal } = useApi();

  function addBag(name, img, price) {
    addToBag({ name, img, price });
  }
  const { handleClickLess, handleClickMore, firstname } = useApi();
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

  const viewImage = () => {
    setShowImg(true);
  };
  return (
    <div className="card-container">
      <li>
        <img src={breakfast.img} alt={"Photo" + breakfast.name} />
        <h1>{isFrench ? breakfast.name[0] : breakfast.name[1]}</h1>
        <h2>{isFrench ? breakfast.content[0] : breakfast.content[1]}</h2>
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
            {count > 0 && (
              <p
                onClick={() => {
                  if (!firstname) {
                    setShowModal(true);
                    return;
                  }
                  addBag(
                    isFrench ? breakfast.name[0] : breakfast.name[1],
                    breakfast.img,
                    breakfast.price * count
                  );
                  incrementBagCount();
                }}
              >
                {breakfast.icon}
              </p>
            )}
            <p onClick={viewImage}>{breakfast.view}</p>
          </div>
        </div>
      </li>
      {showImg && (
        <div className="image-frame">
          <div className="title-iframe-container">
            <h1 className="h1-iframe">
              {isFrench ? breakfast.name[0] : breakfast.name[1]}
            </h1>
          </div>
          <img
            className="img-box"
            src={breakfast.img}
            alt={"image" + breakfast.name}
          />
          <div className="text-frame">
            <p>{isFrench ? breakfast.text[0] : breakfast.text[1]}</p>
          </div>
          <button className="btn-img" onClick={() => setShowImg(false)}>
            {t("title.closeCard")}
          </button>
        </div>
      )}
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
