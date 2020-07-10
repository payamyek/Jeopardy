import React from "react";
import Confetti from 'react-confetti';
import {connect} from "react-redux";
import {Container, Image} from "react-bootstrap";
import celebration from "../Assets/celebration.gif"


function GameOver(props) {
    const style = {fontSize: 'xxx-large', color: 'white'}

    return (
        <Container fluid className='py-5 text-center'>
            <Confetti/>
            <p style={style}>
                Congratulations Team {props.gameState.winner === 1 ? 'Boomer' : 'Zoomer'}
            </p>
            <Image src={celebration}/>
        </Container>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(GameOver);