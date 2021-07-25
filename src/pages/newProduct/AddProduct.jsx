import React from "react";
import "./addProduct.css";

const AddProduct = () => {
  return (
    <div className="addProduct">
      <h1 className="newUser_title">New Product</h1>
      <form className="product_form">
        <div className="form_item">
          <label>Image</label>
          <input className="product_input" type="file" />
        </div>
        <div className="form_item">
          <label>Name</label>
          <input
            className="product_input"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="form_item">
          <label>Stock</label>
          <input className="product_input" type="number" placeholder="123" />
        </div>
        <div className="form_item">
          <label>Active</label>
          <select className="newproduuct_select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newproduct_btn">Create</button>
      </form>
    </div>
  );
};

export default AddProduct;
