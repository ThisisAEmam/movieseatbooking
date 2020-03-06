import React from "react";
import classes from "./MovieImage.module.css";
import Joker from "../images/joker.jpg";
import LionKing from "../images/lionKing.jpg";
import ToyStory from "../images/toyStory.jpg";
import darkKnight from "../images/darkKnight.jpg";
import godfather from "../images/godFather.jpg";
import shawshank from "../images/shawshank.jpg";
import starWars from "../images/starWars.jpg";
import lord from "../images/lordOfTheRings.jpg";
import titanic from "../images/titanic.jpg";

const MovieImage = props => {
  let image =
    props.image === "Joker"
      ? Joker
      : props.image === "LionKing"
      ? LionKing
      : props.image === "ToyStory"
      ? ToyStory
      : props.image === "darkKnight"
      ? darkKnight
      : props.image === "godFather"
      ? godfather
      : props.image === "shawshank"
      ? shawshank
      : props.image === "starWars"
      ? starWars
      : props.image === "lordOfTheRings"
      ? lord
      : props.image === "titanic"
      ? titanic
      : null;
  return <img className={classes.movieImg} src={image} alt="Movie" />;
};

export default MovieImage;
