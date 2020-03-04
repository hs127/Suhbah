import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import "./style.css";
function Header(props) {
    return (
        <Jumbotron className="background">
            <Container>
                <h1 align="center">Suhbah🤗</h1>

                <p align="center">
                    Companionship - Roomatehood beyond spliting bills 🏡
                </p>
            </Container>
        </Jumbotron>

    );
}

export default Header;