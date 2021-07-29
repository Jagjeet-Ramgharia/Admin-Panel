import React, { useContext, useState } from "react";
import "./addProduct.css";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/movieCalls";
import {MovieContext} from '../../context/movieContext/MovieContext'
const AddProduct = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const {dispatch} = useContext(MovieContext)

  const handleInput = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const filename = new Date().getDate() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${filename}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded(prev=> prev + 1)
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleCreate = (e) =>{
    e.preventDefault()
    createMovie(movie,dispatch)
  }

  console.log(movie);
  return (
    <div className="addProduct">
      <h1 className="newUser_title">New Product</h1>
      <form className="product_form">
        <div className="form_item">
          <label>Image</label>
          <input
            className="product_input"
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="form_item">
          <label>Title Image</label>
          <input
            className="product_input"
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="form_item">
          <label>Thumbnail Image</label>
          <input
            className="product_input"
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
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
          <label>Year</label>
          <input
            className="product_input"
            type="text"
            placeholder="2018"
            name="year"
            onChange={handleInput}
          />
        </div>
        <div className="form_item">
          <label>Limit</label>
          <input
            className="product_input"
            type="text"
            placeholder="Age Limit"
            name="limit"
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
          <label>Description</label>
          <input
            className="product_input"
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleInput}
          />
        </div>
        <div className="form_item">
          <label>isSeries</label>
          <select
            className="newproduuct_select"
            name="active"
            id="isSeries"
            name="isSeries"
            onChange={handleInput}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form_item">
          <label>Trailer</label>
          <input
            className="product_input"
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="form_item">
          <label>Video</label>
          <input
            className="product_input"
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="newproduct_btn" onClick={handleCreate}>Create</button>
        ) : (
          <button className="newproduct_btn" onClick={handleUpload}>
            Uploaded
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
