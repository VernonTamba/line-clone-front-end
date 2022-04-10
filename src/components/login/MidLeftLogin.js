import React from "react";
import "./MidLeftLogin.css";
import { Link } from "react-router-dom";

const MidLeftLogin = () => {
  return (
    <div className="midLeftLogin">
      <Link to="/">
        <img
          className="midLeftLogin__logo"
          src="https://logodownload.org/wp-content/uploads/2017/04/line-logo.png"
          alt="LINE logo"
        />
      </Link>

      <form className="midLeftLogin__form">
        <input
          className="midLeftLogin__input no-border-bottom border-top-customized"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="midLeftLogin__input border-bottom-customized"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="midLeftLogin__button" type="submit">
          {/* Link provided just to route between components (because authentication is not made and activated yet) */}
          <Link className="midLeftLogin__buttonLink" to="/main">
            Log in
          </Link>
        </button>
        <a className="midLeftLogin__reset" href="/">
          Reset password
        </a>
      </form>
    </div>
  );
};

export default MidLeftLogin;
