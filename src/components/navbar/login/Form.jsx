import Home from "../../../pages/Home";
import { Link } from "react-router-dom";
import { useState } from "react";
import OldClient from "./OldClient";

const Form = () => {
  const [openNewClient, setOpenNewClient] = useState();

  function handleClickForm() {
    setOpenNewClient(!openNewClient);
  }
  return (
    <div className="container-login">
      <div className="lien-home">
        <a href={<Home />}>Accueil</a>
        <p>| Connexion</p>
      </div>
      <h1>CONNEXION</h1>
      <div className="container-client">
        <nav>
          <Link to="/">
            <li onClick={<Form />}>Nouveau client</li>
          </Link>
          <Link to="/oldclient">
            <li onClick={<OldClient />}>Déjà client</li>
          </Link>
        </nav>
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
            J'accepte les <a href="*">conditions générales de ventes</a> et la
            <a href="*"> politique de confidentialité</a> Doman Frères. Je
            certifie avoir 15 ans révolus.
          </p>
        </div>
        <button className="btn" type="submit">
          CREER MON COMPTE
        </button>
        <p>Les champs marqués d'une * sont obligatoires.</p>
      </div>
    </div>
  );
};

export default Form;
