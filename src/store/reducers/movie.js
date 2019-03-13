import * as actionTypes from "../actions/actionTypes";

const initialState = {
  Watchlist: [{ title: "Lion King", watchedStatus: false }],
  Watched: [{ title: "Lion King 2", watchedStatus: true }],
  userInput: ""
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.HANDLECHANGE:

    //   return {
    //     ...state,
    //     userInput: action.payload.target.value
    //   };
    case actionTypes.ADDMOVIE:
      return {
        ...state,
        Watchlist: state.Watchlist.concat(action.payload)
      };
    case actionTypes.DELETEMOVIE:
      let filteredWatchedArray = state.Watched.filter(
        movieObj => action.payload !== movieObj
      );
      let filteredWatchListArray = state.Watchlist.filter(
        movieObj => action.payload !== movieObj
      );

      return {
        ...state,
        Watchlist: filteredWatchListArray,
        Watched: filteredWatchedArray
      };

    case actionTypes.WTCHEDMOVIE:
      let status = action.payload.watchedStatus;
      if (status) {
        action.payload.watchedStatus = !action.payload.watchedStatus;
        let filteredArray = state.Watched.filter(
          movieObj => action.payload !== movieObj
        );
        let newArray = state.Watchlist;
        newArray.push(action.payload);
        return {
          ...state,
          Watchlist: newArray,
          Watched: filteredArray
        };
      } else {
        let filteredArray1 = state.Watchlist.filter(
          movieObj => action.payload !== movieObj
        );
        action.payload.watchedStatus = !action.payload.watchedStatus;
        let newArray1 = state.Watched;
        newArray1.push(action.payload);

        return {
          ...state,
          Watched: newArray1,
          Watchlist: filteredArray1
        };
      }

    default:
      return state;
  }
};

export default movie;
