import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// add a sign out button here? 
function Naav(props) {

  var style = {
    border: '3px solid #02C39A',
    fontWeight: "bold",
    marginBottom: 30
  }
  return (

    <Navbar style={style} bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="#home" onClick={() => props.handlePageChange("Profile")}>
          My Profile
       </Nav.Link>
        <Nav.Link href="#match" onClick={() => props.handlePageChange("Match")}>
          Ashab Search</Nav.Link>
        <Nav.Link href="#housing" onClick={() => props.handlePageChange("Housing")}>
          Home Details</Nav.Link>
      </Nav>
      {/* <Form inline> */}
      <button className="userButtons1" onClick={props.logout} variant="outline-primary">Sign Out</button>
      {/* </Form> */}
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <a
    //         href="#profile"
    //         onClick={() => props.handlePageChange("Profile")}
    //         className={props.currentPage === "Profile" ? "nav-link active" : "nav-link"}
    //       >
    //         My Profile
    //     </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#match"
    //         onClick={() => props.handlePageChange("Match")}
    //         className={props.currentPage === "Match" ? "nav-link active" : "nav-link"}
    //       >
    //         Companions
    //     </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#housing"
    //         onClick={() => props.handlePageChange("Housing")}
    //         className={props.currentPage === "Housing" ? "nav-link active" : "nav-link"}
    //       >
    //         Home Details
    //     </a>
    //     </li>
    //   </ul>
    //   <button className="userButtons" onClick={props.logout}>
    //     Sign out
    //     </button>
    // </nav>





  );
}

export default Naav;
