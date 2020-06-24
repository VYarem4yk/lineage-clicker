import React from "react";
import logo from "../../images/LoginPage.gif";
import "./Login.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginPageWrapper">
      <img src={logo} className="loginPageLogo"></img>

      <div className="startButton">
        <NavLink to="/GamePage">START </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
