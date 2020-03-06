import React, {useContext} from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";
import MovieImg from "../MovieImage/MovieImage";
import { Context } from '../../../context/context';

const Movie = props => {
  const {setSelectedSeatsNum} = useContext(Context);

  const movieId = props.movieId;
  const clickHandler = () => {
    setSelectedSeatsNum(0);
  }
  return (
    <div className={classes.movieCard}>
      <div className={classes.movieImg}>
        <MovieImg image={props.image} />
      </div>
      <div className={classes.cardBody}>
        <h1>{props.header}</h1>
        <p>{props.body}</p>
        <div className={classes.priceBtn}>
          <p className={classes.price}>${props.price}</p>
          <Link onClick={clickHandler} className={classes.btn} to={`/movie/${movieId}`}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
