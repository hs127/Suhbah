import React from "react";
import "./style.css";


//sign up Modal 

var style = {
  border: '1px solid #00A896',
  color: '#2EB7A9',
  fontWeight: "bold"
}
function RoomateCard(props) {


  return (

    <div id={props.key} className="card">
      <a href={'mailto:' + props.email}>
        <img className="imageCard" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
      </a>
      <div className="userDeets">
        <p><span style={{ fontWeight: "bold", color: style.color }}>USERNAME:</span> <br /> {props.username}</p>
        <p><span style={{ fontWeight: "bold", color: style.color, margin: 0 }}>STATE:</span> {props.state}</p>
        <p>Occupation {props.occupation}</p>
        <p style={style}>{props.placeInd === "havePlace" ? "Has a place" : ""}</p>
      </div>
    </div >

  );
}

export default RoomateCard;
