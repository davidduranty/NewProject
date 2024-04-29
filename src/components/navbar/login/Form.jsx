import { useState } from "react";
import OldClient from "./OldClient";
import { Link } from "react-router-dom";
import { useApi } from "../../../data/Context";

const Form = () => {
  const {
    handleFirstnameChange,
    handleLastnameChange,
    firstname,
    lastname,
    setFirstname,
    setLastname,
  } = useApi();
  const [showNewClient, setShowNewClient] = useState(false);
  const [showOldClient, setShowOldClient] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openNewClientPopup = () => {
    setShowNewClient(true);
    setShowOldClient(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleClickLogin = () => {
    console.log(firstname + " " + lastname);
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
        <div className="container-client">
          <nav>
            <li>Déjà Client</li>
          </nav>
        </div>
      </div>
      <div className="main">
        <div className="form" id="form">
          <div className="mrs-mr">
            <p>Madame</p>
            <p>Monsieur</p>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Prénom *"
              value={setFirstname}
              onChange={handleFirstnameChange}
            />
            <span></span>
            <input
              type="text"
              placeholder="Nom *"
              value={setLastname}
              onChange={handleLastnameChange}
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
            <input type="checkbox" />
            <p>
              J accepte les conditions générales de ventes et la politique de
              confidentialité Doman Frères. Je certifie avoir 15 ans révolus.
            </p>
          </div>
          <button className="btn" type="button" onClick={handleClickLogin}>
            CREER MON COMPTE
          </button>
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
      {showNewClient && <Form />}
      {showOldClient && <OldClient />}
    </div>
  );
};

export default Form;
