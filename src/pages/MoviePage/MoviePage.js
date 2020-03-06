import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import classes from "./MoviePage.module.css";
import { Context } from "../../context/context";
import Navbar from "../../components/Navbar/Navbar";
import Booking from "../../components/Booking/Booking";
import MovieImg from "../../components/UI/MovieImage/MovieImage";

const MoviePage = props => {
  const { trendingMovies, mostPopularMovies, nostalgicMovies, setSelectedSeatsNum } = useContext(Context);

  useEffect(() => {
    setSelectedSeatsNum(0);
    // eslint-disable-next-line
  }, []);

  const {
    params: { movieId }
  } = props.match;

  let movieArr = trendingMovies
    .filter(movie => movie.id === +movieId)
    .concat(nostalgicMovies.filter(movie => movie.id === +movieId))
    .concat(mostPopularMovies.filter(movie => movie.id === +movieId));

  if (movieArr.length === 0) {
    props.history.replace("/notFound");
  }

  const movie = movieArr[0];

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.MoviePage}>
        <div className={classes.movieDisc}>
          <div className={classes.movieImg}>
            <MovieImg image={movie.img} />
          </div>
          <div className={classes.body}>
            <h1 className={classes.header}>{movie.name}</h1>
            <p className={classes.discription}>{movie.body}</p>
            <p className={classes.price}>Ticket price: ${movie.price}</p>
          </div>
        </div>
        <div className={classes.booking}>
          <Booking price={movie.price} movie={movie}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(MoviePage);
