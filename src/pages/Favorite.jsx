// import { useEffect, useState } from "react";
import { useApi } from "../data/Context";
// import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Favorite() {
  const { favorites } = useApi();
  const { t } = useTranslation();

  return (
    <div className="favorite-container">
      <h1 className="title-favorite">{t("title.coups")}</h1>
      <ul className="ul-favorite">
        {favorites.map((favorite, index) => (
          <li key={index}>
            <img src={favorite.img} alt={favorite.name} />
            <p>{favorite.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  // (
  // <div>
  //   <h1>Favorite Items</h1>
  //   <ul>
  //     {favorites.map((item, index) => (
  //       <li key={index}>
  //         {item.map((value, i) => (
  //           <span key={i}>{value}</span>
  //         ))}
  //       </li>
  //     ))}
  //   </ul>
  // </div>
  // )
  // const {
  //   favorites,
  //   toogleFavorite,
  //   handleClickLess,
  //   handleClickMore,
  //   count,
  //   getDej,
  // } = useApi();

  // const [reload, setReload] = useState(false);
  // useEffect(() => {}, [reload]);
  // const onLike = (name) => {
  //   toogleFavorite(name);
  //   setReload(!reload);
  // };
  // return (
  // <ul className="ul-settings-select">
  //   {getDej.map((dej) => (
  //     <div key={dej.id}>
  //       <img src={dej.img} alt="" />
  //       <h1>{dej.name}</h1>
  //       <h2>{dej.content}</h2>
  //       <div className="breakfast-add">
  //         <p>{dej.price.toFixed(2)} / Les 100g</p>
  //         <div className="count-container">
  //           <button className="btn-less" onClick={handleClickLess}>
  //             -
  //           </button>
  //           <span className="result">{count}</span>
  //           <button className="btn-more" onClick={handleClickMore}>
  //             +
  //           </button>
  //         </div>
  //         <div>
  //           <button
  //             className="btn-like"
  //             type="button"
  //             onClick={() => onLike(dej.name)}
  //           >
  //             {favorites.get(dej.name) ? "❤️" : "🤍"}
  //           </button>
  //           <p>{dej.icon}</p>
  //           <p>{dej.view}</p>
  //         </div>
  //       </div>
  //     </div>
  //   ))}
  // </ul>
  // );
}
// Favorite.propTypes = {
//   dej: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     icon: PropTypes.string.isRequired,
//     view: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Favorite;
