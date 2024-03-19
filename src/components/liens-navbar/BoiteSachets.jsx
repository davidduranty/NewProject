import { Link } from "react-router-dom";

const BoiteSachets = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentBoite">
        <ul className="content">
          <h1>Boîtes métal</h1>
          <Link>
            <li>Thé noir</li>
          </Link>
          <Link>
            <li>Thé vert</li>
          </Link>
          <Link>
            <li>Thé blanc</li>
          </Link>
          <Link>
            <li>Thé Oolong</li>
          </Link>
          <Link>
            <li>Thé sombre</li>
          </Link>
          <Link>
            <li>Thé jaune</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li>Maté</li>
          </Link>
          <Link>
            <li className="bold">Toutes nos boîtes de thés et infusions</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Boîtes sachets</h1>
          <Link>
            <li>Thé noir</li>
          </Link>
          <Link>
            <li>Thé vert</li>
          </Link>
          <Link>
            <li>Thé blanc</li>
          </Link>
          <Link>
            <li>Thé Oolong</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li className="bold">Tous les thés et infusions en sachets</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Boîtes sachets enveloppés</h1>
          <Link>
            <li>Thé noir</li>
          </Link>
          <Link>
            <li>Thé vert</li>
          </Link>
          <Link>
            <li>Thé blanc</li>
          </Link>
          <Link>
            <li>Thé Oolong</li>
          </Link>
          <Link>
            <li>Thé sombre</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li className="bold">
              Tous les thés et infusions en sachets enveloppés
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default BoiteSachets;
