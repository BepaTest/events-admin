// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginForm = props => (
  <div>
    <LoginForm {...props} />
  </div>
);

const CustomLoginPage = props => (
  <Login
    backgroundImage = "https://www.vins-niero.com/wp-content/uploads/2019/11/hero-vins-niero-condrieu.jpg"
    loginForm={<CustomLoginForm />} {...props} 
  />
);

export default CustomLoginPage;
