import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FamillyTeas = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="boxContent contentDoman">
        <ul className="content">
          <h1>{t("doman.T1")}</h1>
          <Link>
            <li>{t("doman.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("doman.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("doman.T1-4")}</li>
          </Link>
          <Link>
            <li>{t("doman.T1-5")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("doman.T2")}</h1>
          <Link>
            <li>{t("doman.T2-2")}</li>
          </Link>
          <Link>
            <li>{t("doman.T2-3")}</li>
          </Link>
          <Link>
            <li>{t("doman.T2-4")}</li>
          </Link>
          <Link>
            <li>{t("doman.T2-5")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("doman.T3")}</h1>
          <Link>
            <li>{t("doman.T3-2")}</li>
          </Link>
          <Link>
            <li>{t("doman.T3-3")}</li>
          </Link>
          <Link>
            <li>{t("doman.T3-4")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("doman.T4")}</h1>
          <Link>
            <li>{t("doman.T4-2")}</li>
          </Link>
          <Link>
            <li>D{t("doman.T4-3")}</li>
          </Link>
          <Link>
            <li>{t("doman.T4-4")}</li>
          </Link>
          <Link>
            <li>{t("doman.T4-5")}</li>
          </Link>
          <Link>
            <li>{t("doman.T4-6")}</li>
          </Link>
          <Link>
            <li>{t("doman.T4-7")}</li>
          </Link>
          <Link>
            <li className="bold">{t("doman.T4-8")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FamillyTeas;
