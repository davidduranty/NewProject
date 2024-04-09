import { useState } from "react";
import { useApi } from "../../data/Context";
import CardSelectionSmallBreafast from "../cards/CardSelectionSmallBreafast";
import { useTranslation } from "react-i18next";

function SwiperSelectionSmallBreakfast() {
  const { t } = useTranslation();

  const {
    getClear,
    getFromSmallToBig,
    getFromBigToSmall,
    getSearchCardDej,
    getDej,
  } = useApi();
  const [rangeValue, setRangeValue] = useState(12);

  return (
    <>
      <div className="title-breakfast-container">
        <div className="title-breakfast-content">
          <h1>{t("title.small")}</h1>
        </div>
        <div className="filter-container-small-breakfast">
          <img src="search.png" alt="" />
          <input
            id="my-input"
            type="text"
            placeholder={t("title.input")}
            onChange={(e) => getSearchCardDej(e.target.value)}
          />
          <button
            className="spanUp-filter"
            onClick={(e) => getFromSmallToBig(e.target)}
          >
            &#8593;
          </button>
          <button
            className="spanLess-filter"
            onClick={(e) => getFromBigToSmall(e.target)}
          >
            &#8595;
          </button>
          <button className="clear-filter" onClick={(e) => getClear(e.target)}>
            &#9850;
          </button>
        </div>
      </div>
      <div className="selection-map">
        {getDej.slice(0, rangeValue).map((dej) => (
          <CardSelectionSmallBreafast dej={dej} key={dej} />
        ))}
        <div className="input-range">
          <label htmlFor="">{rangeValue}</label>
          <input
            id="input"
            type="range"
            min="0"
            max="12"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default SwiperSelectionSmallBreakfast;
