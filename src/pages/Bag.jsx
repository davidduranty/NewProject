import { useApi } from "../data/Context";
import { useTranslation } from "react-i18next";

function Bag() {
  const { getAddBag } = useApi();
  const { t } = useTranslation();

  return (
    <>
      <div className="title-bag-container">
        <h1 className="title-bag">{t("title.panier")}</h1>
      </div>
      <div className="bag-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {getAddBag.map((favorite, index) => (
              <tr key={index}>
                <td className="array-bag">
                  <img
                    className="img-bag"
                    src={favorite.img}
                    alt={favorite.name}
                  />
                </td>
                <td className="name-bag">
                  <p>{favorite.name}</p>
                </td>
                <td className="name-price">
                  <span>{favorite.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-container">
          <div className="total">
            <h2>Total</h2>
          </div>
          <div className="price">
            <h3>price</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
