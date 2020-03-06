import React, { useContext } from "react";
import classes from "./MovieList.module.css";
import { Context } from "../../context/context";
import Movie from "../UI/Movie/Movie";

const MovieList = props => {
  const { trendingMovies, mostPopularMovies, nostalgicMovies } = useContext(Context);

  return (
    <React.Fragment>
      <h1 className={classes.header}>{props.header}</h1>
      <div className={classes.movieList}>
        {props.list === "trending"
          ? trendingMovies.map((movie) => {
              return <Movie image={movie.img} movieId={movie.id} key={movie.id} header={movie.name} body={movie.body} price={movie.price} />;
            })
          : props.list === "mostPopular"
          ? mostPopularMovies.map(movie => {
              return <Movie image={movie.img} movieId={movie.id} key={movie.id} header={movie.name} body={movie.body} price={movie.price} />;
            })
          : props.list === "nostalgic"
          ? nostalgicMovies.map(movie => {
              return <Movie image={movie.img} movieId={movie.id} key={movie.id} header={movie.name} body={movie.body} price={movie.price} />;
            })
          : null}
      </div>
    </React.Fragment>
  );
};

export default MovieList;
