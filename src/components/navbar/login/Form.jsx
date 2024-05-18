import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useApi } from "../../../data/Context";

const Form = () => {
  const { t } = useTranslation();
  const [cgv, setCgv] = useState(false);
  const { handleCreateAccount } = useApi();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstname") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastname") || ""
  );

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleClickCGV = () => {
    setCgv(true);
  };
  const handleClickLogin = () => {
    setLoading(true); // Début du chargement
    setTimeout(() => {
      handleCreateAccount(firstName, lastName);
      setLoading(false); // Fin du chargement
    }, 2000);
  };
  useEffect(() => {
    localStorage.setItem("firstname", firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem("lastname", lastName);
  }, [lastName]);

  return (
    <div className={`container-login ${showPopup ? "show" : "hide"}`}>
      <div className="lien-home">
        <Link to="/home">
          <li onClick={closePopup}>Accueil</li>
        </Link>
        <p>| Connexion</p>
      </div>
      <h1>CONNEXION</h1>
      <div className="new-old">
        <div className="container-client">
          <nav>
            <li>Nouveau Client</li>
          </nav>
        </div>
        <div className="container-client" id="container-client">
          <nav>
            <li>Déjà Client</li>
          </nav>
        </div>
      </div>
      <div className="main">
        <div className="form" id="form">
          <div className="mrs-mr">
            <p>{t("title.woman")}</p>
            <p>{t("title.men")}</p>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Prénom *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span></span>
            <input
              type="text"
              placeholder="Nom *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span></span>
            <input type="email" placeholder="Email *" autoComplete="none" />
            <span></span>
            <input type="password" placeholder="Mot de passe *" />
            <span></span>
          </div>
          <div className="check-1">
            <input type="checkbox" />
            <p>
              Si vous souhaitez être tenu(e) informé(e) par e-mail, merci de
              cocher la case ci-contre.
            </p>
          </div>
          <div className="check-2">
            <input type="checkbox" onClick={handleClickCGV} />
            <p>
              J accepte les conditions générales de ventes et la politique de
              confidentialité Doman Frères. Je certifie avoir 15 ans révolus.
            </p>
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => {
              handleClickLogin && cgv
                ? handleClickLogin()
                : alert("Vous devez accepter les CGV");
            }}
          >
            CREER MON COMPTE
          </button>
          {loading && (
            <div className="load">
              <h1>CHARGEMENT</h1>
            </div>
          )}
          <p>Les champs marqués d une * sont obligatoires.</p>
        </div>

        <div className="form" id="formulaire">
          <div className="form-input" id="form-input">
            <input type="email" placeholder="Email *" autoComplete="none" />
            <span></span>
            <input id="pass" type="password" placeholder="Mot de passe *" />
          </div>

          <button className="btn" id="btn" type="button">
            CONNECTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
