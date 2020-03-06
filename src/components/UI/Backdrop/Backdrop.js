import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = props => {
  return (
    <div
    onClick= {props.click}
      className={[
        classes.backdrop,
        props.visible ? classes.visible : null
      ].join(" ")}></div>
  );
};

export default Backdrop;
