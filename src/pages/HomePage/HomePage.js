import React, { useContext } from "react";
import { Context } from "../../context/context";
import { withRouter, Redirect } from "react-router-dom";
import classes from './HomePage.module.css';
import MovieList from "../../components/MovieList/MovieList";
import Navbar from '../../components/Navbar/Navbar';

const HomePage = props => {
  const { auth } = useContext(Context);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.home}>
      <Navbar />
      <MovieList header="Trending Movies" list="trending" />
      <div className={classes.lineBreak}></div>
      <MovieList header="Most Popular Movies" list="mostPopular" />
      <div className={classes.lineBreak}></div>
      <MovieList header="Nostalgic Movies" list="nostalgic" />
    </div>
  );
};

export default withRouter(HomePage);
