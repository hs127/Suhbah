import React from "react";
import "./style.css";


//sign up Modal 

function Housing(props) {

  return (
    <div>
      {/* <TextField
        multiline
        placeholder="Comments or Concerns"
        label="Number"
        type="number"
        name="age"
        value={props.addComments}
        onChange={props.handleInputChange}
      /> */}
      <h1>Residental Details</h1>
      <p>Tyoe of housing: Aparemtn</p>
      <p>Max Rent </p>
      <p>Duration</p>
      <p>Rooms</p>
      <p>Separate Bathrooms</p>
      <button>Listing a place</button>
      <h2>OR </h2>

      <button>Search for just a roomate </button>
    </div>

  );
}

export default Housing;
