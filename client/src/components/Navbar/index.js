import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// add a sign out button here? 
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#profile"
              onClick={() => props.handlePageChange("Profile")}
              className={props.currentPage === "Profile" ? "nav-link active" : "nav-link"}
            >
              My Profile
        </a>
          </li>
          <li className="nav-item">
            <a
              href="#match"
              onClick={() => props.handlePageChange("Match")}
              className={props.currentPage === "Match" ? "nav-link active" : "nav-link"}
            >
              Asahab Matches
        </a>
          </li>
          <li className="nav-item">
            <a
              href="#housing"
              onClick={() => props.handlePageChange("Housing")}
              className={props.currentPage === "Housing" ? "nav-link active" : "nav-link"}
            >
              Home Details (Listing or Searching)
        </a>
          </li>
          <li className="nav-item">
            <button
              href="#signout"
              onClick={props.logout}
            >
              Sign out
        </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
