import { useEffect } from "react";
import i18n from "../../I18n";

function Language() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    changeLanguage("fr");
  }, []);
  return (
    <div className="language-container">
      <button
        className={`btn-en ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span>|</span>
      <button
        className={`btn-fr ${i18n.language === "fr" ? "active" : ""}`}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </button>
    </div>
  );
}

export default Language;
