import React from "react";
import { Link } from "react-router-dom";
import imageone from "../../styles/img/img1.png";
import imagetwo from "../../styles/img/img2.png";
const ContentImg = () => {
  return (
    <div className="content-container">
      <div className="img1">
        <img src={imageone} alt="" />
        <div className="grid-1">
          <h1>L'&#201;T&#201; GLAC&#201;</h1>
          <Link to="/glace">
            <button type="submit">D&#201;COUVRIR</button>
          </Link>
        </div>
      </div>
      <div className="img1">
        <img src={imagetwo} alt="" />
        <div className="grid-1">
          <h1>GRANDS CRUS</h1>
          <button type="submit">NOUVELLES R&#201;COLTES</button>
        </div>
      </div>
      <div className="img3">
        <div className="grid-1">
          <h1>FLEURS BLANCHES</h1>
          <button type="submit">D&#201;COUVRIR</button>
        </div>
      </div>
    </div>
  );
};

export default ContentImg;
