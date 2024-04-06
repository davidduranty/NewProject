// import { useTranslation } from "react-i18next";
import i18n from "../../I18n";

function Language() {
  //   const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="language-container">
      <button className="btn-en" onClick={() => changeLanguage("en")}>
        EN
      </button>
      <button className="btn-fr" onClick={() => changeLanguage("fr")}>
        FR
      </button>
      {/* <li>{t("boxes and bags")}</li> */}
    </div>
  );
}

export default Language;
