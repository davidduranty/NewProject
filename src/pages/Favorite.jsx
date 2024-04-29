// import { useEffect, useState } from "react";
import { useApi } from "../data/Context";
// import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Favorite() {
  const { favorites } = useApi();
  const { t } = useTranslation();

  return (
    <div className="favorite-container">
      <h1 className="title-favorite">
        {favorites.length ? t("title.coups") : ""}
      </h1>
      <ul className="ul-favorite">
        {!favorites.length ? (
          <p className="favorite-empty">{t("title.empty")}</p>
        ) : (
          favorites.map((favorite, index) => (
            <li key={index}>
              <img src={favorite.img} alt={favorite.name} />
              <p>{favorite.name}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Favorite;
