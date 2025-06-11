import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.scss";
import { Link } from "react-router-dom"
const Navbbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/selector">Make Your Resume</Link>
        <Link to="/">Jobs</Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default Navbbar;
