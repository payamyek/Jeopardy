import React from "react"
import {Row, Col} from "reactstrap";
import {connect} from "react-redux";


const h1StyleDefault = {
    fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'white', fontSize: 'xx-large'
};

const h1StyleTurn = {
    fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'chartreuse', fontSize: 'xx-large'
};

function Leaderboard({teams, gameState}) {

    const {teamAMove, teamAPoints, teamBPoints} = gameState

    return (
        <Col>
            <Row className="justify-content-center pt-5" fullheight>
                <h1 style={teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[0]} {teamAPoints}</h1>
            </Row>
            <Row className="justify-content-center" fullheight>
                <h1 style={!teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[1]} {teamBPoints}</h1>
            </Row>
        </Col>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(Leaderboard);