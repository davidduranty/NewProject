import React from "react";
import { useApi } from "../../data/Context";

function SwiperSelectionSmallBreakfast() {
  const {
    getDej,
    getSelectionTea,
    getClear,
    getFromSmallToBig,
    getFromBigToSmall,
    getSearchCardDej,
  } = useApi();
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
    </>
  );
}

export default SwiperSelectionSmallBreakfast;
