import React from "react";
import "./style.css";
import RoomateCard from "../RoomateCard";


//sign up Modal 

function Match(props) {

  return (
    <div>
      {!props.roomates.length ? (<h1>No Matches</h1>) :
        (<div> {props.roomates.map((data, i) => (
          // <h3> {data.volumeInfo.title}
          //     {data.volumeInfo.authors ? <p>{data.volumeInfo.authors[0]}</p> : <p>No Authors</p>}

          // </h3>
          <RoomateCard
            id={data.uid}
            key={data.i}
            kids={data.kids}
            placeInd={data.placeInd}
            pets={data.pets}
            state={data.state}
            username={data.username}
          />

        ))} </div>)

      }

    </div>

  );
}

export default Match;
