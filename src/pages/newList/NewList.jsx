import React, { useContext, useEffect, useState } from "react";
import "./newList.css";
import { getMovies } from "../../context/movieContext/movieCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createList } from "../../context/listContext/listCalls";
import { useHistory } from "react-router-dom";
const NewList = () => {
  const [list, setList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);


  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleInput = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };
  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists")
  };

  // console.log(movie);
  return (
    <div className="addProduct">
      <h1 className="newUser_title">New List</h1>
      <form className="product_form">
        <div className="form_item">
          <label>Title</label>
          <input
            className="product_input"
            type="text"
            placeholder="Jhon Wick"
            name="title"
            onChange={handleInput}
          />
        </div>
        <div className="form_item">
          <label>Genre</label>
          <input
            className="product_input"
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleInput}
          />
        </div>
        <div className="form_item">
          <label>Type</label>
          <input
            type="text"
            name="type"
            placeholder="Movie or Series"
            className="product_input"
            onChange={handleInput}
          />
        </div>
        <div className="form_item">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect}>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <button className="newproduct_btn" onClick={handleSubmit}>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewList;
