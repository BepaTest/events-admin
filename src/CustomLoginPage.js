// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginForm = (props) => (
  <div>
    <LoginForm {...props} />
  </div>
);

const CustomLoginPage = (props) => (
  <Login
    backgroundImage="https://www.parlezmoidimmo.fr/public/files/images/ou-vivre-dans-le-rhone.jpg"
    loginForm={<CustomLoginForm />}
    {...props}
  />
);

export default CustomLoginPage;
