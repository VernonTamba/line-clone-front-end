import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <h1>Life on LINE!</h1>
      <h3>LINE—always at your side.</h3>
      <p>More than just a messenger app.</p>
      <p>
        LINE is new level of communication, and the very infrastructure of your
        life.
      </p>
      <div className="landingPage__links">
        <Link className="landingPage__loginLink" to="/login">
          Login
        </Link>
        <a
          className="landingPage__link"
          href="https://line.me/"
          target="_blank"
          rel="noreferrer"
        >
          Visit LINE Official Site
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
