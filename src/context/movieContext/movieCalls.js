import axios from '../../axios'
import { deleteMovieFAILURE, deleteMovieStart, deleteMovieSuccess, getMoviesFAILURE, getMoviesStart, getMoviesSuccess } from './MovieAction'

export const getMovies = async (dispatch) =>{
    dispatch(getMoviesStart())
    try{
        const res = await axios.get("/movie", {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken
            }
        })
        dispatch(getMoviesSuccess(res.data))
    }catch(err){
        dispatch(getMoviesFAILURE())
    }
}

// to delete a movie 

export const deleteMovie = async (id,dispatch) =>{
    dispatch(deleteMovieStart())
    try{
        await axios.delete("/movie/" + id, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    }catch(err){
        dispatch(deleteMovieFAILURE())
    }
}