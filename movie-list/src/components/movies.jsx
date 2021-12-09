import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends React.Component {
  state = {
    movies: getMovies(), //Temporarily to initialize, to be updated.
    pageSize: 10
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    console.log("Like clicked.", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log("Page", page);
  }

  render() {
    // console.log(this.state.movies);
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLikeToggle={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemsCount={this.state.movies.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
      </React.Fragment>
    );
  }
}

export default Movies;
