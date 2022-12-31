import axios from "axios";
import React, { useState } from "react";
import { API } from "../const/endpoint";
import "./page.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegis = () => {
    const payload = {
      email: email,
      password: password,
      role: "Admin",
    };

    axios
      .post(API.REGISTER, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="regis-wrapper">
      <div className="regis-container">
        <h1>Register Admin</h1>
        <input onChange={handleEmail} placeholder="Email" />
        <input onChange={handlePassword} placeholder="Password" />
        <button onClick={handleRegis}>Register</button>
      </div>
    </div>
  );
};

export default Register;
