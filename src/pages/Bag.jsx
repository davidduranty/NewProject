import { useApi } from "../data/Context";
import { useTranslation } from "react-i18next";

function Bag() {
  const { getAddBag } = useApi();
  const { t } = useTranslation();

  return (
    <div className="favorite-container">
      <h1 className="title-favorite">{t("title.panier")}</h1>
      <ul className="ul-favorite">
        {getAddBag.map((favorite, index) => (
          <li key={index}>
            <img src={favorite.img} alt={favorite.name} />
            <p>{favorite.name}</p>
            <span>{favorite.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bag;
