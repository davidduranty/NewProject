import { useEffect, useState } from "react";
import { useApi } from "../data/Context";
import { useTranslation } from "react-i18next";

function Bag() {
  const { getAddBag, handleClickDelete } = useApi();
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    let total = 0;
    getAddBag.forEach((item) => {
      total += parseFloat(item.price);
    });
    setTotalPrice(total.toFixed(2));
  }, [getAddBag]);

  return (
    <>
      <div className="title-bag-container">
        <h1 className="title-bag">
          {getAddBag.length ? t("title.panier") : t("title.panierVide")}
        </h1>
      </div>
      <div className="bag-container">
        <table>
          <thead>
            <tr>
              <th>{t("title.tableauImg")}</th>
              <th>{t("title.tableauName")}</th>
              <th>{t("title.tableauPrice")}</th>
            </tr>
          </thead>
          <tbody>
            {getAddBag.map((favorite, index) => (
              <>
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
                  <div className="btn-delete-bag">
                    <button
                      type="button"
                      onClick={() => handleClickDelete(index)}
                    >
                      Supprimer
                    </button>
                  </div>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="total-container">
          <div className="total">
            <h2>Total</h2>
          </div>
          <div className="price">
            <h3>{totalPrice} Euros</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
