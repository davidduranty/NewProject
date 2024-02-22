import { useApi } from "../../data/Context";
// import { useState } from "react";
import CardSelectionSmallBreafast from "../cards/CardSelectionSmallBreafast";

function SwiperSelectionSmallBreakfast() {
  const { getClear, getFromSmallToBig, getFromBigToSmall, getSearchCardDej } =
    useApi();

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
        <CardSelectionSmallBreafast />
      </div>
    </>
  );
}

export default SwiperSelectionSmallBreakfast;
