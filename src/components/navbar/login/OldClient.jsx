import React from "react";
import Home from "../../../pages/Home";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";

export default function OldClient() {
  return (
    <div>
      <Navigation />
      <div className=" logined">
        <div className="lien-home">
          <a href={<Home />}>Accueil</a>
          <p>| Connexion</p>
        </div>
        <h1>CONNEXION</h1>
        <div className="container-client">
          <nav>
            <Link to="/">
              <li>Nouveau client</li>
            </Link>
            <Link to="/oldclient">
              <li>Déjà client</li>
            </Link>
          </nav>
        </div>
        <div className="form-input form-client">
          <input type="email" placeholder="Email *" autoComplete="none" />
          <span></span>
          <input type="password" placeholder="Mot de passe *" />
          <span></span>
        </div>

        <button className="btn" type="submit">
          CREER MON COMPTE
        </button>
        <Link>
          <p className="mdp-loose">MOT DE PASSE OUBLIÉ ?</p>
        </Link>
      </div>
    </div>
  );
}
