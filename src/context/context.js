import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const initialUsers = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, username: "Emam", password: "123" },
  { id: 2, username: "Fance", password: "456" },
  { id: 3, username: "Doc", password: "789" }
];

const user_logged = JSON.parse(localStorage.getItem("loggedUser")) || {};

const authenticated = JSON.parse(localStorage.getItem("authenticated")) || false;

const checkout = JSON.parse(localStorage.getItem("checkoutMovie")) || {};

const ContextProvider = props => {
  const [users, setUsers] = useState(initialUsers);
  const [loggedUser, setloggedUser] = useState(user_logged);
  const [showModal, setShowModal] = useState(null);
  const [showPurchasedModal, setShowPurchasedModal] = useState(null);
  const [auth, setAuth] = useState(authenticated);
  const [successfulSignup, setSuccessfulSignup] = useState(false);
  const [occupiedSeats] = useState([13,14,28,29,30,21,48,46,45,2,3,7,33,19,20,21,22]);
  const [selectedSeatsNum, setSelectedSeatsNum] = useState(0);
  const [checkoutMovie, setCheckoutMovie] = useState(checkout);
  const [trendingMovies] = useState([
    {
      id: 1,
      img: "Joker",
      name: "Joker",
      body: `In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. 
      He then embarks on a downward spiral of revolution and bloody crime. 
      This path brings him face-to-face with his alter-ego: the Joker.`,
      price: 12
    },
    {
      id: 2,
      img: "LionKing",
      name: "Lion King",
      body: `After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.`,
      price: 10
    },
    {
      id: 3,
      img: "ToyStory",
      name: "Toy Story 4",
      body: `When a new toy called "Forky" joins Woody and the gang, 
      a road trip alongside old and new friends reveals how big the world can be for a toy.`,
      price: 8
    },
  ]);
  const [mostPopularMovies] = useState([
    {
      id: 4,
      img: "darkKnight",
      name: "The Dark Knight",
      body: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, 
      Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
      price: 15
    },
    {
      id: 5,
      img: "lordOfTheRings",
      name: "The Lord of The Rings",
      body: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
      price: 13
    },
    {
      id: 6,
      img: "titanic",
      name: "Titanic",
      body: `A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.`,
      price: 9
    },
  ]);
  const [nostalgicMovies] = useState([
    {
      id: 7,
      img: "godFather",
      name: "The Godfather",
      body: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
      price: 18
    },
    {
      id: 8,
      img: "shawshank",
      name: "The Shawshank Redemption",
      body: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
      price: 17
    },
    {
      id: 9,
      img: "starWars",
      name: "Star Wars: Episode IV",
      body: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.`,
      price: 15
    },
  ]);

//   window.onbeforeunload = function (e) {
//     window.onunload = function () {
//             window.localStorage.authenticated = "false";
//     }
//     return undefined;
// };

  const addUser = (username, password) => {
    setUsers([
      ...users,
      {
        id: Math.floor(Math.random() * 1000000),
        username,
        password
      }
    ]);
    signupSuccessfully();
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  }, [loggedUser]);

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("checkoutMovie", JSON.stringify(checkoutMovie));
  }, [checkoutMovie]);

  const openModal = type => {
    setShowModal(type);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openPurchasedModal = () => {
    setShowPurchasedModal(true);
  };

  const closePurchasedModal = () => {
    setShowPurchasedModal(false);
  };

  const gotAuth = (username, password) => {
    setAuth(true);
    setloggedUser({username: username, password: password});
  };

  const gotNoAuth = () => {
    setAuth(false);
  };

  const signupSuccessfully = () => {
    setSuccessfulSignup(true);
    setTimeout(() => {
      setSuccessfulSignup(false);
    }, 4000);
  };

  return (
    <Context.Provider
      value={{
        users,
        loggedUser,
        addUser,
        auth,
        gotAuth,
        gotNoAuth,
        showModal,
        openModal,
        closeModal,
        successfulSignup,
        trendingMovies,
        mostPopularMovies,
        nostalgicMovies,
        occupiedSeats,
        selectedSeatsNum,
        setSelectedSeatsNum,
        checkoutMovie,
        setCheckoutMovie,
        showPurchasedModal,
        openPurchasedModal,
        closePurchasedModal
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
