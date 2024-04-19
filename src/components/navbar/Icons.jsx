import { useState, useEffect, useRef } from "react";
import Form from "./login/Form";
import { Link } from "react-router-dom";
import { useApi } from "../../data/Context";
// import { Link } from "react-router-dom";
function Icons() {
  const { counter } = useApi();
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handlers = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handlers);
    return () => {
      document.removeEventListener("click", handlers);
    };
  }, []);
  return (
    <div className="icons-container" ref={menuRef}>
      <img src="user.png" alt="" onClick={() => setOpen(!open)} />
      <div className="icons-container-count">
        <Link to="/favorite">
          <img src="favorite.png" alt="favorite img" />
        </Link>
        <span>0</span>
      </div>
      <div className="icons-container-count">
        <Link to="/bag">
          <img src="bag.png" alt="bag img" />
        </Link>
        <span>{counter}</span>
      </div>

      {open && <Form />}
    </div>
  );
}

export default Icons;
