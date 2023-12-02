import React from "react";
import { useState, useEffect } from "react";

function CardSelectionSmallBreafast({ dej }) {
  const [api, setApi] = useState([]);
  const [favorites, setFavorites] = useState(new Map());

  async function toogleFavorite(name) {
    favorites.set(name, favorites.has(name) ? !favorites.get(name) : true); // fonction favorite

    setFavorites(favorites);
    setApi(api);
  }

  const [reload, setReload] = useState(false);

  useEffect(() => {}, [reload]);
  function onLike(name) {
    toogleFavorite(name);
    setReload(!reload);
  }
  return (
    <ul className="ul-settings-select">
      <img src={dej.img} alt={"Thé" + dej.name} />
      <h1>{dej.name}</h1>
      <h2>{dej.content}</h2>
      <div className="breakfast-add">
        <p>{dej.price.toFixed(2)} / Les 100g</p>
        <div>
          <button
            className="btn-like"
            type="button"
            onClick={() => onLike(dej.name)}
          >
            {favorites.get(dej.name) ? "❤️" : "🤍"}
          </button>
          <p>{dej.icon}</p>
          <p>{dej.view}</p>
        </div>
      </div>
    </ul>
  );
}

export default CardSelectionSmallBreafast;
