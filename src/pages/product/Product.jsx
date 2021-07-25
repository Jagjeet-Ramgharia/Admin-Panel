import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productdata } from "../../dummyData";
import {Publish} from '@material-ui/icons'

const Product = () => {
  return (
    <div className="product">
      <div className="productTitle_container">
        <h1 className="product_title">Product</h1>
        <Link to="/newproduct">
          <button className="productAdd_btn">Create</button>
        </Link>
      </div>
      <div className="product_top">
        <div className="product_top_left">
          <Chart data={productdata} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product_top_right">
          <div className="productInfo_top">
            <img
              src="https://www.apple.com/newsroom/images/tile-images/Apple_airpods-pro_new-design-102819.jpg.og.jpg?202107021822"
              alt=""
              className="productInfo_img"
            />
            <span className="productInfo_name">Apple Airpods</span>
          </div>
          <div className="productInfo_bottom">
            <div className="productInfo_item">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfo_item">
              <span className="productInfoKey">in Stocks:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="product_form">
          <div className="product_form_left">
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" />
            <label>Product Name</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Product Name</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product_form_right">
            <div className="product_upload">
              <img
                src="https://www.apple.com/newsroom/images/tile-images/Apple_airpods-pro_new-design-102819.jpg.og.jpg?202107021822"
                alt=""
              />
              <label for="file"><Publish className="icon"/></label>
              <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="product_updatebtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
