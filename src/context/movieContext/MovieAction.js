export const getMoviesStart = () =>({
    type : "MOVIE_START"
})

export const getMoviesSuccess = (movies) =>({
    type : "MOVIE_SUCCESS",
    payload : movies
})

export const getMoviesFAILURE = () =>({
    type : "MOVIE_FAILURE"
})

//to delete a movie 

export const deleteMovieStart = () =>({
    type : "DELETE_START"
})

export const deleteMovieSuccess = (id) =>({
    type : "DELETE_SUCCESS",
    payload : id
})

export const deleteMovieFAILURE = () =>({
    type : "DELETE_FAILURE"
})