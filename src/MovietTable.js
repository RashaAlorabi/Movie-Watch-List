import React, { Component } from "react";

// import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";
class MovietTable extends Component {
  state = {
    filteredMovies: this.props.movies
    // filteredWatched: this.props.movies
  };
  filterWatchlist = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(movie =>
      `${movie.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredMovies: filteredMovies });
  };

  componentDidUpdate(prevState) {
    if (this.props.movies !== prevState.movies) {
      this.setState({ filteredMovies: this.props.movies });
    }
  }
  render() {
    const movieRows = this.state.filteredMovies.map(movie => (
      <MovieRow
        key={movie.title}
        movie={movie}
        watchedMovie={this.props.watchedMovie}
        deleteMovie={this.props.deleteMovie}
      />
    ));
    return (
      <table className="mt-3 table">
        <SearchBar onChange={this.filterWatchlist} />
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

export default MovietTable;
