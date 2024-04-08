import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Accessoires = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="boxContent contentAccessoires">
        <ul className="content">
          <h1>{t("access.T1")}</h1>
          <Link>
            <li>{t("access.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("access.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("access.T1-4")}</li>
          </Link>
          <Link>
            <li>{t("access.T1-5")}</li>
          </Link>
          <Link>
            <li className="bold">{t("access.T1-6")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("access.T2")}</h1>
          <Link>
            <li>{t("access.T2-2")}</li>
          </Link>
          <Link>
            <li>{t("access.T2-3")}</li>
          </Link>
          <Link>
            <li>{t("access.T2-4")}</li>
          </Link>
          <Link>
            <li>Mugs</li>
          </Link>
          <Link>
            <li>{t("access.T2-5")}</li>
          </Link>
          <Link>
            <li className="bold">{t("access.T2-6")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>B{t("access.T3")}</h1>
          <Link>
            <li>{t("access.T3-2")}</li>
          </Link>
          <Link>
            <li>{t("access.T3-3")}</li>
          </Link>
          <Link>
            <li className="bold">{t("access.T3-4")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("access.T4")}</h1>
          <Link>
            <li>{t("access.T4-2")}</li>
          </Link>
          <Link>
            <li>{t("access.T4-3")}</li>
          </Link>
          <Link>
            <li>{t("access.T4-4")}</li>
          </Link>
          <Link>
            <li>{t("access.T4-5")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Accessoires;
