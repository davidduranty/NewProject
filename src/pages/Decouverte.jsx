import React from "react";
import imagefour from "../../src/styles/img/img4.png";
import { Link } from "react-router-dom";

function Decouverte() {
  return (
    <>
      <div className="smallBreakfast">
        <Link to="/home">
          <p>Accueil</p>
        </Link>
        <h1>DECOUVERTE</h1>
        <img src={imagefour} alt="petit dej" />
      </div>
      <div className="textContainer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          culpa illum veritatis tempora vitae perspiciatis praesentium porro
          possimus, recusandae laboriosam repellat dignissimos voluptatem
          consequatur laborum error nisi vel beatae ducimus facilis, quibusdam a
          cum qui?
        </p>
      </div>
    </>
  );
}

export default Decouverte;