import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ContextGeneral = createContext();

export function ApiProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [tea, setTea] = useState([]);
  const [getMoment, setGetMoment] = useState([]);
  const [getDej, setGetDej] = useState([]);
  const [getInfusion, setGetInfusion] = useState([]);
  const [count, setCount] = useState(0);
  const [uniqueFavorites, setUniqueFavorites] = useState([]);
  const [uniqueToBag, setUniqueToBag] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstname, setFirstName] = useState(
    localStorage.getItem("firstname") || ""
  );
  const [lastname, setLastName] = useState(
    localStorage.getItem("lastname") || ""
  );

  const [getAddBag, setGetAddBag] = useState(
    JSON.parse(localStorage.getItem("bag")) || []
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleClickDelete = (indexToDelete) => {
    const updatedBag = getAddBag.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("bag", JSON.stringify(updatedBag));
    window.location.reload();
  };
  const handleClickDeleteFavorite = (indexToDelete) => {
    const updatedFavorite = favorites.filter(
      (_, index) => index !== indexToDelete
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorite));
    window.location.reload();
  };
  const handleCreateAccount = (newFirstName, newLastName) => {
    setFirstName(newFirstName);
    setLastName(newLastName);
  };
  const addToBag = (item) => {
    if (!getAddBag.find((bag) => bag.name === item.name)) {
      const updateAddToBag = [...getAddBag, item];
      setGetAddBag(updateAddToBag);
      localStorage.setItem("bag", JSON.stringify(updateAddToBag));
    }
  };
  const addToFavorites = (item) => {
    if (!favorites.find((favorite) => favorite.name === item.name)) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

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
    const uniqueNames = new Set();
    const filteredFavorites = favorites.filter((favorite) => {
      if (!uniqueNames.has(favorite.name)) {
        uniqueNames.add(favorite.name);
        return true;
      }
      return false;
    });
    setUniqueFavorites(filteredFavorites);

    const uniqueNamesBag = new Set();
    const filteredAddBag = getAddBag.filter((addBag) => {
      if (!uniqueNamesBag.has(addBag.name)) {
        uniqueNamesBag.add(addBag.name);
        return true;
      }
      return false;
    });
    setUniqueToBag(filteredAddBag);
    getData();
    getDataSelect();
    getSelectionTea();
  }, [favorites, getAddBag]);
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
    try {
      const res = await axios.get("http://localhost:5172/thes/");
      const filteredData = res.data.filter((el) =>
        (el.name[0] || el.name[1]).toLowerCase().includes(word.toLowerCase())
      );

      if (filteredData.length > 0) {
        setTea(filteredData);
      } else {
        console.log("Le mot n'est pas dans la liste.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  // const getDataFilter = async (word) => {
  //   await axios.get("http://localhost:5172/thes/").then((res) => {
  //     setTea(
  //       res.data.filter((el) =>
  //         (el.name[0] || el.name[1]).toLowerCase().includes(word.toLowerCase())
  //       )
  //     );
  //   });
  // };

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
            (el.name[0] || el.name[1])
              .toLowerCase()
              .includes(search.toLowerCase())
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
        setGetDej,
        favorites,
        addToFavorites,
        addToBag,
        getAddBag,
        open,
        setOpen,
        handleCreateAccount,
        lastname,
        firstname,
        handleClickDelete,
        handleClickDeleteFavorite,
        uniqueFavorites,
        uniqueToBag,
        showModal,
        setShowModal,
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
