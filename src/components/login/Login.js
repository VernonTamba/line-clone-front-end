import React from "react";
import "./Login.css";
import LeftLogin from "./LeftLogin";
import RightLogin from "./RightLogin";

const Login = () => {
  return (
    <div className="login">
      <LeftLogin />
      <RightLogin />
    </div>
  );
};

export default Login;
