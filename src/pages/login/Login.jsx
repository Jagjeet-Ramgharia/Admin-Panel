import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/loginCall";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching,dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();
        login({email,password},dispatch)
    }

  return (
    <div className="login">
      <form className="login_form">
        <input
          type="text"
          placeholder="Email"
          className="login_input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login_input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleLogin} disabled={isFetching}>
          Sign In
        </button>
        <small>For Login Credentials please contact admin.</small>
      </form>
    </div>
  );
};

export default Login;
