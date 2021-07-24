import React from "react";
import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <h1 className="newUser_title">New User</h1>
      <form className="newUser_form">
        <div className="form_item">
          <label>Username</label>
          <input className="user_input" type="text" placeholder="Username" />
        </div>
        <div className="form_item">
          <label>Full Name</label>
          <input className="user_input" type="text" placeholder="Full Name" />
        </div>
        <div className="form_item">
          <label>Email</label>
          <input className="user_input" type="email" placeholder="example@gmail.com" />
        </div>
        <div className="form_item">
          <label>Password</label>
          <input className="user_input" type="password"/>
        </div>
        <div className="form_item">
          <label>Phone</label>
          <input className="user_input" type="number" placeholder="123..."/>
        </div>
        <div className="form_item">
          <label>Address</label>
          <input className="user_input" type="text" placeholder="Address"/>
        </div>
        <div className="form_item">
          <label>Gender</label>
          <div className="newUser_gender">
          <input className="user_radio" type="radio" name="gender" id="male" value="male"/>
          <label for="male">Male</label>
          <input className="user_radio" type="radio" name="gender" id="female" value="female"/>
          <label for="female">Female</label>
          <input className="user_radio" type="radio" name="gender" id="other" value="other"/>
          <label for="other">Other</label>
          </div>
        </div>
        <div className="form_item">
          <label>Active</label>
          <select className="newUser_select" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
          </select>
        </div>
        <button className="newUser_btn">Create</button>
      </form>
    </div>
  );
};

export default AddUser;
