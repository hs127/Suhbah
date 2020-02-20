import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function Header(props) {
    console.log(props);

    return (
        <Jumbotron fluid className="background">
            <Container>
                <h1>Welcome to Suhbah</h1>

                <p>
                    Companionship
                </p>

            </Container>
        </Jumbotron>

    );
}

export default Header;