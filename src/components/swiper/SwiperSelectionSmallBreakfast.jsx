import { useApi } from "../../data/Context";
// import { useState } from "react";
import CardSelectionSmallBreafast from "../cards/CardSelectionSmallBreafast";

function SwiperSelectionSmallBreakfast() {
  const { getClear, getFromSmallToBig, getFromBigToSmall, getSearchCardDej } =
    useApi();

  return (
    <>
      <div className="title-breakfast-container">
        <div className="title-breakfast-content">
          <h1>SÉLECTION PETIT-DÉJEUNER</h1>
        </div>
        <div className="filter-container-small-breakfast">
          <img src="search.png" alt="" />
          <input
            id="my-input"
            type="text"
            placeholder="Recherche"
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
        <CardSelectionSmallBreafast />
      </div>
    </>
  );
}

export default SwiperSelectionSmallBreakfast;
