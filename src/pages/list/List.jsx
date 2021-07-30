import React from "react";
import "./list.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";

const List = () => {
  const location = useLocation();
  const list = location.list
  return (
    <div className="list">
      <div className="productTitle_container">
        <h1 className="product_title">List</h1>
        <Link to="/newList">
          <button className="productAdd_btn">Create</button>
        </Link>
      </div>
      <div className="product_top">
        <div className="product_top_right">
          <div className="productInfo_top">
            <span className="productInfo_name">{list?.title}</span>
          </div>
          <div className="productInfo_bottom">
            <div className="productInfo_item">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{list?._id}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Genre: </span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Year :</span>
              <span className="productInfoValue">{list?.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="products_form">
          <div className="product_form_left">
            <label>List Title</label>
            <input type="text" placeholder={list?.title} />
            <label>Type</label>
            <input type="text" placeholder={list?.type} />
            <label>Genre</label>
            <input type="text" placeholder={list?.genre} />
          </div>
          <div className="product_form_right">
            <button className="product_updatebtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
