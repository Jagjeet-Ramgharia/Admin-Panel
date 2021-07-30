import React, { useContext } from "react";
import "./sidebar.css";
import { LineStyle, PlayCircleFilledRounded, Timeline, TrendingUp } from "@material-ui/icons";
import { Link, useHistory} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {AuthContext} from '../../context/authContext/AuthContext';
import { logout } from "../../context/authContext/AuthAction";

const Sidebar = () => {

  const {dispatch} = useContext(AuthContext)
  const history = useHistory()

  const handleLogout = () =>{
    dispatch(logout())
    history.push('/login')
  }
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className="sibebar_title">Dashboard</h3>
          <ul className="sidebar_list">
          <Link to="/" className="link">
            <li className="sidebar_listitem active">
              <LineStyle className="sidebar_icons" />
              Home
            </li>
            </Link>
            <li className="sidebar_listitem">
              <Timeline className="sidebar_icons" />
              Analytics
            </li>
            <li className="sidebar_listitem">
              <TrendingUp className="sidebar_icons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sibebar_title">Quick Menu</h3>
          <ul className="sidebar_list">
            <Link to="/users" className="link">
              <li className="sidebar_listitem ">
                <LineStyle className="sidebar_icons" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
            <li className="sidebar_listitem">
              <PlayCircleFilledRounded className="sidebar_icons" />
              Movies
            </li>
            </Link>
            <Link to="/lists" className="link">
            <li className="sidebar_listitem">
              <TrendingUp className="sidebar_icons" />
              Lists
            </li>
            </Link>
            <li className="sidebar_listitem" onClick={handleLogout}>
              <ExitToAppIcon className="sidebar_icons" />
              LogOut
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sibebar_title">Notifications</h3>
          <ul className="sidebar_list">
            <li className="sidebar_listitem">
              <LineStyle className="sidebar_icons" />
              Mail
            </li>
            <li className="sidebar_listitem">
              <Timeline className="sidebar_icons" />
              Feedback
            </li>
            <li className="sidebar_listitem">
              <TrendingUp className="sidebar_icons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sibebar_title">Staff</h3>
          <ul className="sidebar_list">
            <li className="sidebar_listitem">
              <LineStyle className="sidebar_icons" />
              Manage
            </li>
            <li className="sidebar_listitem">
              <Timeline className="sidebar_icons" />
              Analytics
            </li>
            <li className="sidebar_listitem">
              <TrendingUp className="sidebar_icons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
