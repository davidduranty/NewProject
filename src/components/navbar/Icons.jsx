import { useState, useEffect, useRef } from "react";
import Form from "./login/Form";
function Icons() {
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
      <img src="favorite.png" alt="" />
      <img src="bag.png" alt="" />
      {open && <Form />}
    </div>
  );
}

export default Icons;
