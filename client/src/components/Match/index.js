import React from "react";
import "./style.css";
import RoomateCard from "../RoomateCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Match(props) {

  return (
    <div>
      {!props.roomates.length ? (<h1 align="center" >No Matches</h1>) :
        (<Col><div className="roomateCard"> {props.roomates.map((data, i) => (
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

        ))} </div></Col>)

      }

    </div>

  );
}

export default Match;
