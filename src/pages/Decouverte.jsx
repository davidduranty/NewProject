import React, { useEffect } from "react";

import imagefour from "../../src/styles/img/img4.png";
import { Link } from "react-router-dom";

function Decouverte() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        document.querySelector(".arrow-fixed").classList.add("active");
      } else {
        document.querySelector(".arrow-fixed").classList.remove("active");
      }
    });
  }, []);
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
