import { Link } from "react-router-dom";

const FamillyTeas = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentDoman">
        <ul className="content">
          <h1>DOMAN Frères</h1>
          <Link>
            <li>Notre histoire</li>
          </Link>
          <Link>
            <li>Nos métiers</li>
          </Link>
          <Link>
            <li>Notre savoir faire</li>
          </Link>
          <Link>
            <li>Art de la dégustation</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Nos engagements sociétaux</h1>
          <Link>
            <li>Notre raison d être et société à mission</li>
          </Link>
          <Link>
            <li>Notre charte éthique</li>
          </Link>
          <Link>
            <li>Nos engagements</li>
          </Link>
          <Link>
            <li>Notre sourcing</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Carrières</h1>
          <Link>
            <li>Travailler chez DAMMANN Frères</li>
          </Link>
          <Link>
            <li>Nos offres</li>
          </Link>
          <Link>
            <li>Devenir franchisé</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Éditos</h1>
          <Link>
            <li>A la une</li>
          </Link>
          <Link>
            <li>Dernières infos produits</li>
          </Link>
          <Link>
            <li>Cultivons nos liens</li>
          </Link>
          <Link>
            <li>L’essentiel sur nos thés...</li>
          </Link>
          <Link>
            <li>... et sur nos infusions</li>
          </Link>
          <Link>
            <li>DAMMANN Frères en cuisine</li>
          </Link>
          <Link>
            <li className="bold">Tous nos articles</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FamillyTeas;
