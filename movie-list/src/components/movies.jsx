import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/genreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utilities/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [], //set movies to empty until data is received
    currentPage: 1,
    genres: [],
    pageSize: 4,
    sortColumn: { path: "title", order: "ascending" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    // console.log("Like clicked.", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    // console.log("Page", page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    // console.log("Sort:", path);
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]); //3 arguments: input, [parameter name],[sort order]

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies};
  };

  render() {
    // console.log(this.state.movies);

    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
    } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies} = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
