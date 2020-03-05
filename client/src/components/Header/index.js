import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import "./style.css";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

function Header(props) {

    const bounceAnimation = keyframes`${bounce}`;
    const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

    // const styles = {
    //     bounce: {
    //         animation: 'x 1s'
    //     }
    // }
    return (
        <Jumbotron className="background">
            <Container>
                <BouncyDiv> <h1 align="center">Suhbah🤗</h1> </BouncyDiv>

                <p align="center">
                    Companionship - Roomatehood beyond spliting bills 🏡
                </p>
            </Container>
        </Jumbotron>

    );
}

export default Header;