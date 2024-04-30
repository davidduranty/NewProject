import PropTypes from "prop-types";
import { useApi } from "../../data/Context";
import { useState } from "react";
import i18n from "../../I18n";

const Card = ({ tea }) => {
  const isFrench = i18n.language === "fr";

  const { handleClickLess, handleClickMore, addToBag, incrementBagCount } =
    useApi();
  const [count, setCount] = useState(0);
  const [showImg, setShowImg] = useState(false);

  function addBag(name, img, price) {
    addToBag({ name, img, price });
  }

  const handleIncrement = () => {
    setCount(count + 1);
    handleClickMore();
  };

  const viewImage = () => {
    setShowImg(true);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      handleClickLess();
    }
  };
  return (
    <div className="card-container" key={tea.id}>
      <li>
        <img src={tea.img} alt={"image" + tea.name} />
        <h1>{isFrench ? tea.name[0] : tea.name[1]}</h1>
        <h2>{isFrench ? tea.content[0] : tea.content[1]}</h2>
        <div className="priceAndBag">
          <p>
            {tea.price.toFixed(2)}
            {isFrench ? "/ Les 100 G" : "/ The 100 G"}
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
                  addBag(
                    isFrench ? tea.name[0] : tea.name[1],
                    tea.img,
                    tea.price * count
                  );
                  incrementBagCount();
                }}
              >
                {tea.bag}
              </span>
            )}
            <span className="iconEye" onClick={viewImage}>
              {tea.view}
            </span>
          </div>
        </div>
      </li>
      {showImg && (
        <div className="image-frame">
          <div className="title-iframe-container">
            <h1 className="h1-iframe">
              {isFrench ? tea.name[0] : tea.name[1]}
            </h1>
          </div>
          <img className="img-box" src={tea.img} alt={"image" + tea.name} />
          <div className="text-frame">
            <p>{isFrench ? tea.text[0] : tea.text[1]}</p>
          </div>
          <button className="btn-img" onClick={() => setShowImg(false)}>
            Fermer
          </button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  tea: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    bag: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
