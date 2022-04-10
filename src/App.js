import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import LandingPage from "./components/landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* LANDING PAGE */}
          <Route path="/" exact element={<LandingPage />} />
          {/* LOGIN COMPONENT */}
          <Route path="/login" exact element={<Login />} />
          {/* MAIN COMPONENT */}
          <Route path="/main" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
