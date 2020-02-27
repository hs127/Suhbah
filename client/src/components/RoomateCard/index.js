import React from "react";
import "./style.css";


//sign up Modal 

function RoomateCard(props) {

  return (
    <div id={props.key} className="card">
      <p>username: {props.username}</p>
      <p>Kids{props.kids ? <p>Yes</p> : <p>No</p>}</p>
      <p>Have Pets {props.pets}</p>
      <p>Smoke {props.smoke}</p>
      <p>State {props.state}</p>
      <p>PlaceInd {props.placeInd}</p>
    </div>

  );
}

export default RoomateCard;
