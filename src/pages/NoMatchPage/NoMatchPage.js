import React from "react";
import { withRouter } from 'react-router-dom';
import classes from "./NoMatchPage.module.css";
import NotFound from "./notFound.png";

const NoMatchPage = props => {
    const goHomeHandler = () => {
        props.history.replace('/');
    }
  return (
    <div className={classes.noMatch}>
      <img src={NotFound} alt="404" />
      <div className={classes.textDiv}>
        <h3>Not Found <i className="fas fa-frown"></i></h3>
        <h6>We can not find the page you are seeking.</h6>
        <p>But you can go back home.</p>
        <button onClick={goHomeHandler}>Go Home</button>
      </div>
    </div>
  );
};

export default withRouter(NoMatchPage);
