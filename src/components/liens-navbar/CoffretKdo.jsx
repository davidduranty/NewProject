import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoffretKdo = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="boxContent contentCoffret">
        <ul className="content">
          <h1>{t("navbar.gift & boxes")}</h1>
          <Link>
            <li>{t("kdo.T1-1")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T1-4")}</li>
          </Link>
          <Link>
            <li className="bold">{t("kdo.T1-5")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("kdo.T2")}</h1>
          <Link>
            <li>{t("kdo.T2-1")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T2-2")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T2-3")}</li>
          </Link>
          <Link>
            <li>{t("kdo.T2-4")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CoffretKdo;
