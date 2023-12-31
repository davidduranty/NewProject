import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ContextGeneral = createContext();

export function ApiProvider({ children }) {
  const [tea, setTea] = useState([]);
  const [getMoment, setGetMoment] = useState([]);
  const [getDej, setGetDej] = useState([]);
  const [getInfusion, setGetInfusion] = useState([]);
  const [count, setCount] = useState(0);
  const [favorites, setFavorites] = useState(new Map());

  async function toogleFavorite(name) {
    favorites.set(name, favorites.has(name) ? !favorites.get(name) : true); // fonction favorite

    setFavorites(favorites);
    setGetDej(getDej);
  }

  const getDataInfusion = async () => {
    try {
      const res = await axios.get("http://localhost:5172/infusions/");
      setGetInfusion(res.data);
    } catch (err) {
      console.error(err.res.data);
      setGetInfusion(undefined);
    }
  };

  useEffect(() => {
    getDataInfusion();
  }, []);
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

  const getSelectionTea = () => {
    axios
      .get("http://localhost:5172/selection-small-dej")
      .then((res) => setGetDej(res.data));
  };
  const getSearchCardDej = async (search) => {
    await axios
      .get("http://localhost:5172/selection-small-dej/")
      .then((res) => {
        setGetDej(
          res.data.filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      });
  };
  const getFromBigToSmall = async () => {
    await axios
      .get("http://localhost:5172/selection-small-dej/")
      .then((res) => {
        setGetDej(res.data.sort((a, b) => b.price - a.price));
      });
  };
  const getFromSmallToBig = async () => {
    await axios
      .get("http://localhost:5172/selection-small-dej/")
      .then((res) => {
        setGetDej(res.data.sort((a, b) => a.price - b.price));
      });
  };
  const getClear = () => {
    axios
      .get("http://localhost:5172/selection-small-dej")
      .then((res) => setGetDej(res.data))
      .then(() => {
        document.getElementById("my-input").value = "";
      });
  };
  useEffect(() => {
    getSelectionTea();
  }, []);

  function handleClickLess() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleClickMore() {
    if (count < 12) {
      setCount(count + 1);
    }
  }
  return (
    <ContextGeneral.Provider
      value={{
        tea,
        getDataFilter,
        getMoment,
        getDataFilterMoment,
        getDej,
        getClear,
        getFromSmallToBig,
        getFromBigToSmall,
        getSearchCardDej,
        getInfusion,
        handleClickLess,
        handleClickMore,
        count,
        toogleFavorite,
        setGetDej,
        favorites,
      }}
    >
      {children}
    </ContextGeneral.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useApi = () => useContext(ContextGeneral);
