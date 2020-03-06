import React, { useContext } from "react";
import classes from "./LandingPage.module.css";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import { Context } from "../../context/context";
import { withRouter } from "react-router-dom";
import Logo from '../../components/UI/Logo/Logo.png';

const LandingPage = props => {
  const { showModal, openModal, closeModal, auth, successfulSignup } = useContext(Context);

  if (auth) {
    props.history.replace("/home");
  }

  let modal = null;

  if (showModal === "login") {
    modal = (
      <div className={classes.modalDiv}>
        <Modal head="Login" type="login" />
        <Backdrop visible click={closeModal} />
      </div>
    );
  } else if (showModal === "signup") {
    modal = (
      <div className={classes.modalDiv}>
        <Modal head="Sign up" type="signup" />
        <Backdrop visible click={closeModal} />
      </div>
    );
  }

  const loginClickHandler = () => {
    openModal("login");
  };
  const signupClickHandler = event => {
    event.preventDefault();
    openModal("signup");
  };

  let signupMsg = successfulSignup ? <p className={classes.signupMsg}>You have been signed up successfully...</p> : null;

  return (
    <div className={classes.LandingPage}>
      {signupMsg}
      {modal}
      <h1 className={classes.header}>
        <span>Welcome to</span>
      </h1>
      <img className={classes.Logo} src={Logo} alt=""/>
      <p className={classes.subtitle}>Please Login to continue</p>
      <div className={classes.btns}>
        <div className={classes.loginBtn}>
          <Button type="primary" clicked={loginClickHandler}>
            Login
          </Button>
        </div>
        <a href="/" className={classes.signUpBtn} onClick={signupClickHandler}>
          Don't have an acount? No Problem, <span>Sign up now!</span>
        </a>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);
