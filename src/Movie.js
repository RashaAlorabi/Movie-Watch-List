import React, { Component } from "react";

import SearchBar from "./SearchBar";
import MovietTable from "./MovietTable";

import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

class Movie extends Component {
  // state = {
  //   Watchlist: [{ title: "Lion King", watchedStatus: false }],
  //   Watched: [{ title: "Lion King 2", watchedStatus: true }],
  //   userInput: ""
  // };
  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  addMovie = movieName => {
    // let newMovie = {
    //   title: movieName,
    //   watchedStatus: false
    // };
    // await this.setState({
    //   Watchlist: this.state.Watchlist.concat(newMovie)
    // });
    this.props.addMovie(movieName);
  };

  watchedMovie = movie => {
    //
    this.props.watchedMovie(movie);
  };

  deleteMovie = movie => {
    // let filteredWatchedArray = this.state.Watched.filter(
    //   movieObj => movie !== movieObj
    // );
    // let filteredWatchListArray = this.state.Watchlist.filter(
    //   movieObj => movie !== movieObj
    // );
    // this.setState({
    //   Watched: filteredWatchedArray,
    //   Watchlist: filteredWatchListArray
    // });
    this.props.deleteMovie(movie);
  };

  render() {
    return (
      <div className="movie">
        <label>
          <span>Movie: </span>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </label>
        <button
          style={{ display: "inline-block", marginRight: "20px" }}
          className="btn btn-warning"
          onClick={() => this.addMovie(this.state.userInput)}
        >
          <span> + add </span>
        </button>

        <div className="row">
          <div className="col-6">
            <div>Watchlist</div>
            {this.props.Watchlist.length}
            <MovietTable
              movies={this.props.Watchlist}
              watchedMovie={this.watchedMovie}
              deleteMovie={this.deleteMovie}
            />
          </div>
          <div className="col-6">
            <div>Watched</div>
            {this.props.Watched.length}
            <MovietTable
              movies={this.props.Watched}
              watchedMovie={this.watchedMovie}
              deleteMovie={this.deleteMovie}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Watchlist: state.Watchlist,
    Watched: state.Watched,
    userInput: state.userInput
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // handleChange: event => dispatch(actionCreators.handleChange(event)),
    addMovie: movieName => dispatch(actionCreators.addMovie(movieName)),
    watchedMovie: movie => dispatch(actionCreators.watchedMovie(movie)),
    deleteMovie: movie => dispatch(actionCreators.deleteMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
