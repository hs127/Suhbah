import React from "react";
import "./style.css";
import RoomateCard from "../RoomateCard";


function Match(props) {

  return (
    <div>
      {!props.roomates.length ? (<h1 align="center" >No Matches</h1>) :
        (<div> {props.roomates.map((data, i) => (
          <RoomateCard
            id={data.uid}
            key={data.i}
            kids={data.kids}
            email={data.email}
            placeInd={data.placeInd}
            pets={data.pets}
            state={data.state}
            username={data.username}
            occupation={data.occupation}
          />

        ))} </div>)

      }

    </div>

  );
}

export default Match;
