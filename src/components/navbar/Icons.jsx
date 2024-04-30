import { useState, useEffect, useRef } from "react";
import Form from "./login/Form";
import { Link } from "react-router-dom";
import { useApi } from "../../data/Context";
import { useTranslation } from "react-i18next";

// import { Link } from "react-router-dom";
function Icons() {
  const { open, setOpen, firstname, lastname, getAddBag, favorites } = useApi();
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
  return (
    <div className="icons-container" ref={menuRef}>
      <div className="user-container">
        <img src="user.png" alt="" onClick={() => setOpen(!open)} />
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
        <span>{favorites.length}</span>
      </div>
      <div className="icons-container-count">
        <Link to="/bag">
          <img src="bag.png" alt="bag img" />
        </Link>
        <span>{getAddBag.length}</span>
      </div>

      {open && <Form />}
    </div>
  );
}

export default Icons;
