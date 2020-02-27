import React from "react";
import "./style.css";


//sign up Modal 

function RoomateCard(props) {

  return (
    <div id={props.key} className="card">
      <a href={'mailto:' + props.email}>
        <img className="imageCard" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
      </a>
      <p>username: {props.email}</p>
      <p>State {props.state}</p>
      <p>PlaceInd {props.placeInd}</p>
      <p>Occupation {props.occupation}</p>
    </div >

  );
}

export default RoomateCard;
