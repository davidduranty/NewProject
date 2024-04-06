import { useTranslation } from "react-i18next";

function TitleImgTextIce() {
  const { t } = useTranslation();

  return (
    <>
      <div className="smallBreakfast">
        <h1>{t("title.title")}</h1>
        <img src="petit-dej.webp" alt="petit dej" />
      </div>
      <div className="textContainer">
        <p>{t("title.text")}</p>
      </div>
    </>
  );
}

export default TitleImgTextIce;
