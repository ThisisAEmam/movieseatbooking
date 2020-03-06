import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../UI/Logo/Logo.png";
import { Context } from "../../context/context";

const Navbar = () => {
  const { loggedUser, gotNoAuth } = useContext(Context);

  const logoutHandler = event => {
    event.preventDefault();
    gotNoAuth();
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navContainer}>
        <Link to="/" className={classes.navbarBrand}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={classes.welcomeMsg}>
          <p><i className="fas fa-user"></i>Welcome, <span>{loggedUser.username}</span></p>
          <a href="/" onClick={logoutHandler}>Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
