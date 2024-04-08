import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BoiteSachets = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="boxContent contentBoite">
        <ul className="content">
          <h1>{t("bag.T1")}</h1>
          <Link>
            <li>{t("infusion.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-8")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-6")}</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-2")}</li>
          </Link>
          <Link>
            <li className="bold">{t("bag.T1-2")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("bag.T1-3")}</h1>
          <Link>
            <li>{t("infusion.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-8")}</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li className="bold">{t("bag.T1-4")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("bag.T1-5")}</h1>
          <Link>
            <li>{t("infusion.T1-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-8")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-5")}</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li className="bold">{t("bag.T1-6")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default BoiteSachets;
