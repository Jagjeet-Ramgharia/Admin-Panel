import React, { useEffect, useState } from "react";
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";
import axios from "../../axios";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmZkYWU4ZGU3OWEwNTE0Y2JhYTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzQ1MjQ4NCwiZXhwIjoxNjI3ODg0NDg0fQ.J0sJzr-QsKscAo7-xk3vhkeB7_hpSogsf1sc0haGOSI",
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers()
  });
  return (
    <div className="widget_sm">
      <span className="title">New Members</span>
      <ul className="widget_list">
        {users.map((user) => {
          return (
            <>
              <li className="widget_list_item">
                <img
                  className="widget_sm_img"
                  src={user.profilePic ? user.profilePic : "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"}
                  alt=""
                />
                <div className="widgetsm_user">
                  <span className="widget_username">{user.username}</span>
                  <span className="widget_user_job">{user.email}</span>
                </div>
                <button className="widgetsm_btn">
                  <Visibility className="widgetsm_icons" />
                  Display
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
