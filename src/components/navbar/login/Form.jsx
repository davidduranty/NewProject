import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useApi } from "../../../data/Context";

const Form = () => {
  const { t } = useTranslation();
  const [errorFirstName, setErrorFirstName] = useState();
  const [errorLastName, setErrorLastName] = useState();
  const [errorEmail, setErrorEmail] = useState();
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
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleClickCGV = () => {
    setCgv(true);
  };
  const handleClickLogin = () => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(firstName && lastName)) {
      alert("Ne doit contenir que des lettres et des espaces");
      return;
    }
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

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setErrorFirstName("Ne doit contenir que des lettres et des espaces");
    } else {
      setErrorFirstName("");
    }
  };
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setErrorLastName("Ne doit contenir que des lettres et des espaces");
    } else {
      setErrorLastName("");
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setErrorEmail("Ne doit contenir que des lettres ");
    } else {
      setErrorEmail("");
    }
  };

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
              onChange={handleFirstNameChange}
            />
            <span>{errorFirstName}</span>
            <input
              type="text"
              placeholder="Nom *"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <span>{errorLastName}</span>
            <input
              type="email"
              placeholder="Email *"
              autoComplete="none"
              value={email}
              onChange={handleEmailChange}
            />
            <span>{errorEmail}</span>
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
