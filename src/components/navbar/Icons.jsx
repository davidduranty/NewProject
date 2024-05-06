import { useState, useEffect, useRef } from "react";
import Form from "./login/Form";
import { Link } from "react-router-dom";
import { useApi } from "../../data/Context";
import { useTranslation } from "react-i18next";

// import { Link } from "react-router-dom";
function Icons() {
  const { open, setOpen, firstname, lastname, uniqueToBag, uniqueFavorites } =
    useApi();
  const { t } = useTranslation();

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

  const handleClickRemove = () => {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    window.location.reload();
  };
  return (
    <div className="icons-container" ref={menuRef}>
      <div className="user-container">
        <img src="user.png" alt="" onClick={() => setOpen(!open)} />
        <span
          className="inOrOut"
          style={
            lastname && firstname
              ? { background: "green" }
              : { background: "red" }
          }
          onClick={handleClickRemove}
        ></span>
        <span>
          {lastname && firstname
            ? `${t("title.hello")} ${lastname} ${firstname}`
            : ""}
        </span>
      </div>
      <div className="icons-container-count">
        <Link to="/favorite">
          <img src="favorite.png" alt="favorite img" />
        </Link>
        <span>{uniqueFavorites.length}</span>
      </div>
      <div className="icons-container-count">
        <Link to="/bag">
          <img src="bag.png" alt="bag img" />
        </Link>
        <span>{uniqueToBag.length}</span>
      </div>

      {open && <Form />}
    </div>
  );
}

export default Icons;
