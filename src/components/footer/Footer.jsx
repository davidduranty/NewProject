import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      {/* Footer Haut */}

      <div className="footer-container-haut">
        <div className="frais-de-port-container">
          <div className="img">
            <img src="frame.svg" alt="" />
          </div>
          <div className="h2">
            <h2>{t("footer.T1")}</h2>
          </div>
          <div className="h4">
            <h4>{t("footer.ST1")}</h4>
          </div>
        </div>
        <div className="paiement-securise">
          <div className="img">
            <img src="fdf.svg" alt="" />
          </div>
          <div className="h2">
            <h2>{t("footer.T2")}</h2>
          </div>
          <div className="h4">
            <h4>{t("footer.ST2")}</h4>
          </div>
        </div>
        <div className="sav-qualite">
          <div className="img">
            <img src="sav.svg" alt="" />
          </div>
          <div className="h2">
            <h2>{t("footer.T3")}</h2>
          </div>
          <div className="h4">
            <h4>{t("footer.ST3")}</h4>
          </div>
        </div>
      </div>

      {/* Footer Milieu */}

      <div className="footer-container-milieu">
        {/* Premier container */}

        <div className="doman-freres-container">
          <h1>{t("footer.T4")}</h1>

          <Link to="/contacter">
            <li>{t("footer.ST4-1")}</li>
          </Link>
          <Link to="/delais">
            <li>{t("footer.ST4-2")}</li>
          </Link>
          <Link to="/offres">
            <li>{t("footer.ST4-3")}</li>
          </Link>
        </div>

        {/* Deuxième container */}

        <div className="nous-trouver-container">
          <div className="title-container-footer">
            <h1>{t("footer.T5")}</h1>
          </div>
          <Link to="/boutiques">
            <li>{t("footer.T5-1")}</li>
          </Link>
          <Link to="/revendeurs">
            <li>{t("footer.T5-2")}</li>
          </Link>
          <Link to="/distributeurs">
            <li>{t("footer.T5-3")}</li>
          </Link>
          <Link to="/kdo">
            <li>{t("footer.T5-4")}</li>
          </Link>
          <Link to="/presse">
            <li>{t("footer.T5-5")}</li>
          </Link>
        </div>

        {/* Troisième container */}

        <div className="pro-container">
          <div className="title-container-footer">
            <h1>{t("footer.T6")}</h1>
          </div>
          <div className="text">
            <p>{t("footer.T6-1")}</p>
          </div>
          <a href="*">{t("footer.T6-2")}</a>
        </div>

        {/* Quatrième container */}

        <div className="suivez-container">
          <div className="title-container-footer">
            <h1>{t("footer.T7")}</h1>
          </div>
          <div className="text">
            <p>{t("footer.T7-1")}</p>
          </div>
          <div className="input">
            <input
              type="email"
              placeholder={t("footer.T7-2")}
              autoComplete="off"
            />
          </div>
          <button className="btn">{t("footer.T7-3")}</button>
          <div className="icons-container-footer">
            <img className="face" src="facebook.png" alt="Lien Facebook" />
            <img src="instagram.png" alt="Lien Instagram" />
            <img src="Pinterest.png" alt="Lien Pinterest" />
            <img src="linkedin.png" alt="Lien Linkedin" />
          </div>
        </div>
      </div>

      {/* Footer Bas */}
      <div className="footer-bas">
        <div className="all-droits-container">
          <div className="all-droits">
            <p>{t("footer.T8")}</p>
          </div>
          <div className="lien-container-bas">
            <Link to="/mentions">
              <li>{t("footer.T8-1")}</li>
            </Link>
            <Link to="/cgv">
              <li>{t("footer.T8-2")}</li>
            </Link>
            <Link to="/plan">
              <li>{t("footer.T8-3")}</li>
            </Link>
            <Link to="/credits">
              <li>{t("footer.T8-4")}</li>
            </Link>
            <Link to="/politique">
              <li>{t("footer.T8-5")}</li>
            </Link>
          </div>
        </div>
        <div className="iref">
          <div className="icon-iref">
            <img src="logo-iref.webp" alt="Lien Iref" />
          </div>
          <div className="last-text">
            <p>{t("footer.T8-6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
