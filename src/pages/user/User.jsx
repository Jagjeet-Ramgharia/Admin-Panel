import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const User = () => {
  return (
    <div className="user">
      <div className="user_title_container">
        <h1 className="user_title">Edit User</h1>
        <Link to="/newuser">
        <button className="userAdd_btn">Create</button>
        </Link>
      </div>
      <div className="user_container">
        <div className="user_show">
          <div className="user_show_top">
            <img
              className="user_img"
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              alt=""
            />
            <div className="user_title">
              <span className="user_username">Jon Snow</span>
              <span className="user_job">Fighter</span>
            </div>
          </div>
          <div className="user_show_bottom">
            <span className="userBottom_title">Account Details</span>
            <div className="userBottom_info">
              <PermIdentity />
              <span className="userBottomInfo_title">WhiteWolf99</span>
            </div>
            <div className="userBottom_info">
              <CalendarToday />
              <span className="userBottomInfo_title">16/1/1999</span>
            </div>
            <span className="userBottom_title">Contact Details</span>
            <div className="userBottom_info">
              <PhoneAndroid />
              <span className="userBottomInfo_title">6283818230</span>
            </div>
            <div className="userBottom_info">
              <MailOutline />
              <span className="userBottomInfo_title">Jon@gmail.com</span>
            </div>
            <div className="userBottom_info">
              <LocationSearching />
              <span className="userBottomInfo_title">Ludhiana | Punjab</span>
            </div>
          </div>
        </div>
        <div className="user_Update">
          <span className="user_title">Edit </span>
          <form className="userupdate_form">
            <div className="userupdate_left">
              <div className="userupdate_item">
                <label>Username :</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="userupdate_input"
                />
              </div>
              <div className="userupdate_item">
                <label>Full Name :</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="userupdate_input"
                />
              </div>
              <div className="userupdate_item">
                <label>Email :</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userupdate_input"
                />
              </div>
              <div className="userupdate_item">
                <label>Phone :</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="userupdate_input"
                />
              </div>
              <div className="userupdate_item">
                <label>Address :</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userupdate_input"
                />
              </div>
            </div>
            <div className="userupdate_right">
              <div className="userupdate_upload">
                <img
                  className="userupdate_img"
                  src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="publish" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userupdate_btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
