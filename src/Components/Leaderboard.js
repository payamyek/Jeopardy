import React from "react"
import {Row} from "reactstrap";
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
        <div className='align-self-center'>
            <Row className="pl-4 pt-5">
                <h1 style={teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[0]} {teamAPoints}</h1>
            </Row>
            <Row className="pl-4">
                <h1 style={!teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[1]} {teamBPoints}</h1>
            </Row>
        </div>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(Leaderboard);