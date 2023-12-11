import { Link } from "react-router-dom";

const TeaInfusion = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentTea">
        <ul className="content">
          <h1>Type de thé</h1>
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
            <li>Thé sombre</li>
          </Link>
          <Link>
            <li>Thé jaune</li>
          </Link>
          <Link>
            <li className="bold">Tous les thés</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Type d infusion</h1>
          <Link>
            <li>Maté</li>
          </Link>
          <Link>
            <li>Tisane</li>
          </Link>
          <Link>
            <li>Carcadet</li>
          </Link>
          <Link>
            <li>Cacao</li>
          </Link>
          <Link>
            <li>Curcuma</li>
          </Link>
          <Link>
            <li>Rooibos</li>
          </Link>
          <Link>
            <li className="bold">Toutes les infusions</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Familles aromatiques</h1>
          <Link>
            <li>Epicée/Boisée</li>
          </Link>
          <Link>
            <li>Fleurie</li>
          </Link>
          <Link>
            <li>Fruitée</li>
          </Link>
          <Link>
            <li>Fumée</li>
          </Link>
          <Link>
            <li>Gourmande</li>
          </Link>
          <Link>
            <li>Grillée</li>
          </Link>
          <Link>
            <li>Mentholée</li>
          </Link>
          <Link>
            <li>Sous-bois</li>
          </Link>
          <Link>
            <li>Végétale</li>
          </Link>
          <Link>
            <li>Animale</li>
          </Link>
          <Link>
            <li className="bold">Toutes les familles aromatiques</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Origines</h1>
          <Link>
            <li>Afrique</li>
          </Link>
          <Link>
            <li>Chine</li>
          </Link>
          <Link>
            <li>Colombie</li>
          </Link>
          <Link>
            <li>Corée</li>
          </Link>
          <Link>
            <li>Inde</li>
          </Link>
          <Link>
            <li>Japon</li>
          </Link>
          <Link>
            <li>Népal</li>
          </Link>
          <Link>
            <li>Ceylan</li>
          </Link>
          <Link>
            <li>Taïwan</li>
          </Link>
          <Link>
            <li className="bold">Tous nos thés d origine</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Séléctions</h1>
          <Link>
            <li>Nos Grands crus</li>
          </Link>
          <Link>
            <li>Mélanges classiques</li>
          </Link>
          <Link>
            <li>Thés et infusions galcés</li>
          </Link>
          <Link>
            <li>Thés et infusion nature</li>
          </Link>
          <Link>
            <li>Thés et infusions aromatisés</li>
          </Link>
          <Link>
            <li>Thés enfleurés</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TeaInfusion;
