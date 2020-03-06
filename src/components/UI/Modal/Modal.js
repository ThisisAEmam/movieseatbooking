import React, { useState, useContext, useEffect } from "react";
import classes from "./Modal.module.css";
import Button from "../Button/Button";
import { Context } from "../../../context/context";

const Modal = props => {
  const { closeModal, users, gotAuth, addUser } = useContext(Context);
  const [username, setUsername] = useState("");
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [alreadyTaken, setAlreadyTaken] = useState(null);

  useEffect(() => {
    setEmptyUsername(false);
    setNotFound(false);
    setAlreadyTaken(false);
  }, [username]);

  useEffect(() => {
    setEmptyPassword(false);
    setNotFound(false);
  }, [password]);

  const submitHandler = (event, type) => {
    event.preventDefault();
    if (!username && !password) {
      setEmptyUsername(true);
      setEmptyPassword(true);
      return;
    } else if (!username) {
      setEmptyUsername(true);
      return;
    } else if (!password) {
      setEmptyPassword(true);
      return;
    }
    if (type === "login") {
      users.forEach(user => {
        if (user.username === username && user.password === password) {
          closeModal();
          gotAuth(username, password);
        }
      });
      setNotFound(true);
    }
    if (type === "signup") {
      const already = users.filter(user => user.username === username);
      if (already.length === 0) {
        addUser(username, password);
        closeModal();
      } else {
        setAlreadyTaken(true);
      };
    }
  };

  const usernameHandler = event => {
    setUsername(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  let erroMsg = notFound ? <p className={classes.errMsg}>Invalid username or password. Please try again...</p> : null;

  return (
    <div className={classes.modal}>
      <h1 className={classes.heading}>{props.head}</h1>
      {erroMsg}
      <form onSubmit={e => submitHandler(e, props.type)} className={classes.form}>
        <div className={classes.formControl}>
          <label htmlFor="username" className={(emptyUsername || alreadyTaken) ? classes.empty : null}>
            Username
          </label>
          <input onChange={usernameHandler} type="text" placeholder="Enter your username" className={(emptyUsername || alreadyTaken) ? classes.emptyInput : null} />
          <p className={[classes.blankMsg, emptyUsername ? classes.show : null].join(" ")}>Please enter a username</p>
          <p className={[classes.blankMsg, alreadyTaken ? classes.show : null].join(" ")}>This username is already taken.</p>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="password" className={emptyPassword ? classes.empty : null}>
            Password
          </label>
          <input onChange={passwordHandler} type="password" placeholder="Enter your password" className={emptyPassword ? classes.emptyInput : null} />
          <p className={[classes.blankMsg, emptyPassword ? classes.show : null].join(" ")}>Please enter a password</p>
        </div>
        <div className={classes.btns}>
          <Button type="secondary" clicked={closeModal}>
            Cancel
          </Button>
          <Button type="primary" Type="submit">
            {props.type === "login" ? "Login" : props.type === "signup" ? "Sign up" : null}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
