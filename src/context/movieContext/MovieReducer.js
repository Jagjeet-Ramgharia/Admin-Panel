const MovieReducer = (state, action) => {
    switch (action.type) {
      case "MOVIE_START":
        return {
          movies: [],
          isFetching: true,
          error: false,
        };
  
      case "MOVIE_SUCCESS":
        return {
          movies: action.payload,
          isFetching: false,
          error: false,
        };
  
      case "MOVIE_FAILURE":
        return {
          movies: [],
          isFetching: false,
          error: true,
        };
        case "DELETE_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
      
          case "DELETE_SUCCESS":
            return {
              movies: state.movies.filter((movie)=> movie._id !== action.payload),
              isFetching: false,
              error: false,
            };
      
          case "DELETE_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default MovieReducer;
  