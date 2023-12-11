import { Link } from "react-router-dom";

const Accessoires = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentAccessoires">
        <ul className="content">
          <h1>Théières</h1>
          <Link>
            <li>Fonte de Chine</li>
          </Link>
          <Link>
            <li>Fonte du Japon</li>
          </Link>
          <Link>
            <li>Porcelaine</li>
          </Link>
          <Link>
            <li>Verre</li>
          </Link>
          <Link>
            <li className="bold">Toutes nos théières</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Bols, tasses, autres</h1>
          <Link>
            <li>Bols</li>
          </Link>
          <Link>
            <li>Tisanières</li>
          </Link>
          <Link>
            <li>Tasses</li>
          </Link>
          <Link>
            <li>Mugs</li>
          </Link>
          <Link>
            <li>Bouteilles isothermes</li>
          </Link>
          <Link>
            <li className="bold">Tous les accessoires pour la dégustation</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Boîtes à thé</h1>
          <Link>
            <li>Boîtes vides décorées</li>
          </Link>
          <Link>
            <li>Boîtes Dammann Frères</li>
          </Link>
          <Link>
            <li className="bold">Toutes nos boîtes à thé</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Accessoires de préparation</h1>
          <Link>
            <li>Cuillères et boules à thé</li>
          </Link>
          <Link>
            <li>Préparation du thé</li>
          </Link>
          <Link>
            <li>Collection maison</li>
          </Link>
          <Link>
            <li>Autres accessoires de préparation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Accessoires;
