import React, { Component } from 'react';
import { getMovies } from "../services/movieService";

class Movies extends React.Component {
  state = {
    movies: getMovies()    //Temporarily to initialize, to be updated.
  }

  render() { 
    return <div></div>;
  }
}
 
export default Movies;