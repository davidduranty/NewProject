import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ContextGeneral = createContext();

export function ApiProvider({ children }) {
  const [tea, setTea] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3004/thes/");
      setTea(res.data);
    } catch (err) {
      console.error(err.res.data);
      setTea(undefined);
    }
  };

  const getDataFilter = async (word) => {
    await axios.get("http://localhost:3004/thes/").then((res) => {
      setTea(
        res.data.filter((element) =>
          element.name.toLowerCase().includes(word.toLowerCase())
        )
      );
    });
  };
  return (
    <ContextGeneral.Provider value={{ tea, getData, getDataFilter }}>
      {children}
    </ContextGeneral.Provider>
  );
}

ApiProvider.prototype = {
  children: PropTypes.node.isRequired,
};
export const useApi = () => useContext(ContextGeneral);
