import Home from "../../../pages/Home";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";

export default function OldClient() {
  const [getNew, setGetNew] = useState();
  const [getOld, setGetOld] = useState();

  function getNewClient() {
    setGetNew(true);
    setGetOld(false);
  }
  function getOldClient() {
    setGetOld(true);
    setGetNew(false);
  }
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
          <button onClick={getNewClient}>Nouveau client</button>
          <button onClick={getOldClient}>Déjà client</button>
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
      {getNew && <Form />}
      {getOld && <OldClient />}
    </div>
  );
}
