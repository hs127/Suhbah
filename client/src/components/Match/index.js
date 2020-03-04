import React from "react";
import "./style.css";
import RoomateCard from "../RoomateCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Match(props) {
  var users = [];
  props.roomates.map((data, i) => {
    if (props.userID !== data.uid) {
      users.push(data)
    }
  })

  return (
    <div className="backgroundDeets">
      {/* <Container className="formColor test">
        <h1 className="formh1">Search for a صديق [Sadēq] </h1>
      </Container> */}
      {!users.length ? (<h1 align="center" >No Matches</h1>) :
        (<Col>
          <h3 className="formh3">Click on a صديق to 📧</h3>
          <div className="roomateCard"> {users.map((data, i) => (


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
