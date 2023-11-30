import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ContextGeneral = createContext();

export function ApiProvider({ children }) {
  const [tea, setTea] = useState([]);
  const [getMoment, setGetMoment] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5172/thes/");
      setTea(res.data);
    } catch (err) {
      console.error(err.res.data);
      setTea(undefined);
    }
  };

  const getDataFilter = async (word) => {
    await axios.get("http://localhost:5172/thes/").then((res) => {
      setTea(
        res.data.filter((element) =>
          element.name.toLowerCase().includes(word.toLowerCase())
        )
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getDataSelect = () => {
    axios
      .get("http://localhost:5172/moment")
      .then((el) => setGetMoment(el.data));
  };

  const getDataFilterMoment = async (search) => {
    await axios
      .get("http://localhost:5172/moment/")
      .then((el) =>
        setGetMoment(
          el.data.filter((element) =>
            element.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getDataSelect();
  }, []);
  return (
    <ContextGeneral.Provider
      value={{
        tea,
        getDataFilter,
        getMoment,
        getDataFilterMoment,
      }}
    >
      {children}
    </ContextGeneral.Provider>
  );
}

ApiProvider.prototype = {
  children: PropTypes.node.isRequired,
};
export const useApi = () => useContext(ContextGeneral);
