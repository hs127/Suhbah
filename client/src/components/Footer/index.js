import React from "react";
import "./style.css";


var style = {
  backgroundColor: "#F1F0CC",
  borderTop: "2px solid #34D1BF",
  textAlign: "center",
  padding: "15px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  color: "#476A6F"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        Copyright 2020
      </div>
    </div>
  )
}

export default Footer; 