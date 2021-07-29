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

//to create a movie 

export const createMovieStart = () =>({
    type : "CREATE_MOVIE_START"
})

export const createMovieSuccess = (movie) =>({
    type : "CREATE_MOVIE_SUCCESS",
    payload : movie
})

export const createMovieFAILURE = () =>({
    type : "CREATE_MOVIE_FAILURE"
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