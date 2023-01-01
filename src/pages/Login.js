import axios from "axios";
import React, { useState } from "react";
import { API } from "../const/endpoint";
import "./page.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post(API.LOGIN, payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="regis-wrapper">
      <div className="regis-container">
        <h1>Login Admin</h1>
        <input onChange={handleEmail} placeholder="Email" />
        <input onChange={handlePassword} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
