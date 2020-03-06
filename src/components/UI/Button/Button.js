import React from "react";
import classes from "./Button.module.css";

const Button = props => (
  <button
    onClick={props.clicked}
    disabled={props.setDisable}
    type={props.Type}
    className={[props.type === "secondary" ? classes.Cancel : classes.Primary, classes.Btn].join(" ")}>
    {props.children}
  </button>
);

export default Button;
