import { Link } from "react-router-dom";
import imageone from "../../styles/img/img1.png";
import imagetwo from "../../styles/img/img2.png";
import imagethree from "../../styles/img/img3.png";
import { useTranslation } from "react-i18next";

const ContentImg = () => {
  const { t } = useTranslation();

  return (
    <div className="content-container">
      <div className="img1">
        <img src={imageone} alt="photo été glacé" />
        <div className="grid-1">
          <h1>{t("title.title")}</h1>
          <Link to="/glace">
            <button className="btn-grid" type="submit">
              {t("title.discover")}
            </button>
          </Link>
        </div>
      </div>
      <div className="img1">
        <img src={imagetwo} alt="" />
        <div className="grid-2">
          <h1>{t("title.high")}</h1>
          <Link to="/decouverte">
            <button className="btn-grid" type="submit">
              {t("title.new")}
            </button>
          </Link>
        </div>
      </div>
      <div className="img1">
        <img src={imagethree} alt="" />
        <div className="grid-3">
          <h1>{t("title.flower")}</h1>
          <button className="btn-grid" type="submit">
            {t("title.discover")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentImg;
