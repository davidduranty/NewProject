import { useState } from "react";
import OldClient from "./OldClient";
import { Link } from "react-router-dom";

const Form = () => {
  const [showNewClient, setShowNewClient] = useState(false);
  const [showOldClient, setShowOldClient] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openNewClientPopup = () => {
    setShowNewClient(true);
    setShowOldClient(false);
  };

  const openOldClientPopup = () => {
    setShowNewClient(false);
    setShowOldClient(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
      <div className="container-client">
        <li onClick={openNewClientPopup}>Nouveau Client</li>
        <li onClick={openOldClientPopup}>Déjà Client</li>
      </div>
      <div className="form">
        <div className="mrs-mr">
          <p>Madame</p>
          <p>Monsieur</p>
        </div>
        <div className="form-input">
          <input type="text" placeholder="Prénom *" />
          <span></span>
          <input type="text" placeholder="Nom *" />
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
            J accepte les <a href="*">conditions générales de ventes</a> et la
            <a href="*"> politique de confidentialité</a> Doman Frères. Je
            certifie avoir 15 ans révolus.
          </p>
        </div>
        <button className="btn" type="submit">
          CREER MON COMPTE
        </button>
        <p>Les champs marqués d une * sont obligatoires.</p>
      </div>
      {showNewClient && <Form />}
      {showOldClient && <OldClient />}
    </div>
  );
};

export default Form;
