import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function SubmitMessage(props) {
  console.log(props);

  return (
    <Jumbotron fluid className="background">
      <Container>
        <h4>
          Thank You {props.username} for Submitting Your Form. We are reviweing it at the moment and can take up to 24 hrs.

         </h4>
      </Container>
    </Jumbotron>

  );
}

export default SubmitMessage;