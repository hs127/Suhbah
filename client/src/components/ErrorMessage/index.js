import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function ErrorMessage(props) {


  return (
    <div>
      <Jumbotron fluid className="background">
        <Container>

          <h4>
            Please Submit Profile First so we can get to know you better
          </h4>

          <button onClick={() => props.handlePageChange("Profile")} >My Profile Page </button>
        </Container>
      </Jumbotron >
    </div>

  );
}


export default ErrorMessage;


