import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/home">
        <img src="logo192.png" alt="icon logo" />
      </Link>
      <h1>DOMAN Tea</h1>
    </div>
  );
};

export default Logo;
