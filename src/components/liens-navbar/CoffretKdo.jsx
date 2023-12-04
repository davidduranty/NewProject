import React from "react";
import { Link } from "react-router-dom";

const CoffretKdo = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentCoffret">
        <ul className="content">
          <h1>Coffrets & cadeaux</h1>
          <Link>
            <li>Coffrets cadeaux thés en boîtes</li>
          </Link>
          <Link>
            <li>Coffrets cadeaux thés en sachets</li>
          </Link>
          <Link>
            <li>Coffrets vides</li>
          </Link>
          <Link>
            <li>Petites attentions</li>
          </Link>
          <Link>
            <li className="bold">Tous les coffrets et cadeaux</li>
          </Link>
        </ul>
        <ul className="content">
          <h1>Séléctions</h1>
          <Link>
            <li>Cadeaux pour un amateur</li>
          </Link>
          <Link>
            <li>Cadeaux pour un connaisseur</li>
          </Link>
          <Link>
            <li>Cadeaux coup de coeur...</li>
          </Link>
          <Link>
            <li>Cadeaux incontournables</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CoffretKdo;
