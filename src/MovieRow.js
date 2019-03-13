import React, { Component } from "react";

// import { Link, NavLink } from "react-router-dom";

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;
    let status = movie.watchedStatus ? "Unwatch" : "Watch";
    return (
      <tr>
        <td>{movie.title} </td>

        <td>
          <button
            onClick={() => this.props.watchedMovie(movie)}
            className="btn btn-primary"
          >
            {status}
          </button>
        </td>
        <td>
          <button
            onClick={() => this.props.deleteMovie(movie)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
