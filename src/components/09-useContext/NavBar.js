import React from "react";
import { Link as NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">useContext</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAllMarkup">
            <div className="navbar-nav">
                <NavLink exact to="/" activeclassname="active" className="nav-item nav-link">Home</NavLink>
                <NavLink exact to="/about" activeclassname="active" className="nav-item nav-link">About</NavLink>
                <NavLink exact to="/login" activeclassname="active" className="nav-item nav-link">Login</NavLink>
            </div>
        </div>
    </nav>
  );
};
