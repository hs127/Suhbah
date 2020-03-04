import React from "react";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function SubmitMessage(props) {
  console.log(props);
  return (
    <Jumbotron fluid className="background">
      <Container className="formColor test">
        <Row>
          <Col>
            <h4 className="formh1">
              Thank You {props.username} for Submitting Your {props.currentPage} Form.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="formh1">
              We are running a background check and can take up to 24 hrs.
         </h4>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="userButtons test">
            {props.currentPage === "Profile" ? <button onClick={() => props.handlePageChange("Housing")} >Submit Housing Form </button> :
              <button onClick={() => props.handlePageChange("Match")} >Find Companions</button>}
          </Col>
        </Row>

      </Container>
    </Jumbotron>

  );
}

export default SubmitMessage;