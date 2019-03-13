import * as actionTypes from "./actionTypes";

// export const handleChange = event => {
//   return {
//     type: actionTypes.HANDLECHANGE,
//     payload: event
//   };
// };

export const addMovie = movieName => {
  let newMovie = {
    title: movieName,
    watchedStatus: false
  };
  return {
    type: actionTypes.ADDMOVIE,
    payload: newMovie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionTypes.DELETEMOVIE,
    payload: movie
  };
};

export const watchedMovie = movie => {
  return {
    type: actionTypes.WTCHEDMOVIE,
    payload: movie
  };
};
