import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeaInfusion = () => {
  const { t } = useTranslation();

  return (
    <div className="boxContainer">
      <div className="boxContent contentTea">
        <ul className="content">
          <h1>{t("infusion.T1")}</h1>
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
            <li>{t("infusion.T1-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T1-6")}</li>
          </Link>
          <Link>
            <li className="bold">{t("infusion.T1-7")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("infusion.T2")}</h1>
          <Link>
            <li>{t("infusion.T2-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-6")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T2-7")}</li>
          </Link>
          <Link>
            <li className="bold">{t("infusion.T2-8")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("infusion.T3")}</h1>
          <Link>
            <li>{t("infusion.T3-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-6")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-7")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-8")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-9")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-10")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T3-11")}</li>
          </Link>
          <Link>
            <li className="bold">{t("infusion.T3-12")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("infusion.T4")}</h1>
          <Link>
            <li>{t("infusion.T4-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-6")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-7")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-8")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-9")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T4-10")}</li>
          </Link>
          <Link>
            <li className="bold">{t("infusion.T4-11")}</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>{t("infusion.T5")}</h1>
          <Link>
            <li>{t("infusion.T5-2")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-3")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-4")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-5")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-6")}</li>
          </Link>
          <Link>
            <li>{t("infusion.T5-8")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TeaInfusion;
