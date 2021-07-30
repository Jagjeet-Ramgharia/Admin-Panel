import React from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";

const Product = () => {
  const location = useLocation();
  const movie = location.movie
  return (
    <div className="product">
      <div className="productTitle_container">
        <h1 className="product_title">Product</h1>
        <Link to="/newmovie">
          <button className="productAdd_btn">Create</button>
        </Link>
      </div>
      <div className="product_top">
        <div className="product_top_right">
          <div className="productInfo_top">
            <img
              src={movie?.img}
              alt=""
              className="productInfo_img"
            />
            <span className="productInfo_name">{movie?.title}</span>
          </div>
          <div className="productInfo_bottom">
            <div className="productInfo_item">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{movie?._id}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Genre: </span>
              <span className="productInfoValue">{movie?.genre}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Year :</span>
              <span className="productInfoValue">{movie?.year}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Desc :</span>
              <span className="productInfoValue">{movie?.desc}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Limit :</span>
              <span className="productInfoValue">{movie?.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="products_form">
          <div className="product_form_left">
            <label>Movie Title</label>
            <input type="text" placeholder={movie?.title} />
            <label>Year</label>
            <input type="text" placeholder={movie?.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie?.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie?.limit} />
            <label>Trailer</label>
            <input type="file"/>
            <label>Video</label>
            <input type="file"/>
          </div>
          <div className="product_form_right">
            <div className="product_upload">
              <img
                src={movie?.img}
                alt=""
              />
              <label for="file">
                <Publish className="icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product_updatebtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
