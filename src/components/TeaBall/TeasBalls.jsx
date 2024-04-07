import { useTranslation } from "react-i18next";

const TeasBalls = () => {
  const { t } = useTranslation();

  return (
    <div className="teas-balls-container">
      <div className="img">
        <img src="Thé-noir.avif" alt="" />
        <div className="rond-text">
          <h3 className="hide">{t("circle.T1")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Thé_vert.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T2")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Thé-blanc.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T3")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Thé-jaune.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T4")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Thé-sombre.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T5")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Thé-oolong.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T6")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Tisane.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T7")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Rooibos.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T8")}</h3>
        </div>
      </div>
      <div className="img">
        <img src="Carcadet.avif" alt="" />
        <div className="rond-text">
          <h3>{t("circle.T9")}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeasBalls;
