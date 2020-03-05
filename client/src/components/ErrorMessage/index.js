import React from "react";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function ErrorMessage(props) {


  return (
    <div>
      <Jumbotron fluid className="background">
        <Container className="formColor test">
          <Row>
            <Col>
              <h4 className="formh1">
                Please submit your Profile first so we can get to know you better 😃</h4>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 6, offset: 3 }} className="userButtons test">
              <button onClick={() => props.handlePageChange("Profile")} >My Profile Page </button>
            </Col>
          </Row>
        </Container>
      </Jumbotron >
    </div>

  );
}


export default ErrorMessage;


