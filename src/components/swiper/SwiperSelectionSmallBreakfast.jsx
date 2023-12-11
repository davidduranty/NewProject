import { useApi } from "../../data/Context";
import { useState } from "react";
import CardSelectionSmallBreafast from "../cards/CardSelectionSmallBreafast";

function SwiperSelectionSmallBreakfast() {
  const [rangeValue, setRangeValue] = useState(12);
  const {
    getDej,
    getClear,
    getFromSmallToBig,
    getFromBigToSmall,
    getSearchCardDej,
  } = useApi();

  const getDisplay = () => {
    let input = document.querySelector(".selection-map");
    if (rangeValue < 4) {
      input.classList.add("lessFour");
    }
  };

  return (
    <>
      <div className="title">
        <h1>SÉLECTION PETIT-DÉJEUNER</h1>
        <img src="search.png" alt="" />
        <input
          id="my-input"
          type="text"
          placeholder="Recherche"
          onChange={(e) => getSearchCardDej(e.target.value)}
        />
        <button className="spanUp" onClick={(e) => getFromSmallToBig(e.target)}>
          &#8593;
        </button>
        <span className="spanLess" onClick={(e) => getFromBigToSmall(e.target)}>
          &#8595;
        </span>
        <span className="clear" onClick={(e) => getClear(e.target)}>
          &#9850;
        </span>
      </div>
      <div className="selection-map">
        <div className="input-range">
          <label htmlFor="" onChange={getDisplay}>
            {rangeValue}
          </label>
          <input
            id="input"
            type="range"
            min="0"
            max="12"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </div>
        {getDej.slice(0, rangeValue).map((dej) => (
          <CardSelectionSmallBreafast dej={dej} key={dej.id} />
        ))}
      </div>
    </>
  );
}

export default SwiperSelectionSmallBreakfast;
