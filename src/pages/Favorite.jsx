import { useEffect } from "react";
import { useApi } from "../data/Context";
import { useTranslation } from "react-i18next";

function Favorite() {
  const { favorites, handleClickDeleteFavorite } = useApi();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <div className="favorite-content">
              <li key={index}>
                <img src={favorite.img} alt={favorite.name} />
                <p>{favorite.name}</p>
              </li>
              <button
                type="button"
                onClick={() => handleClickDeleteFavorite(index)}
              >
                Supprimer
              </button>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default Favorite;
