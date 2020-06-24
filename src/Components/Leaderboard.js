import React from "react"
import {Col} from "reactstrap";
import {connect} from "react-redux";

function Leaderboard({teams, gameState}) {

    let h1StyleDefault =  {
        fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'white', fontSize: 'xx-large'
    };

    let h1StyleTurn =  {
        fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'chartreuse', fontSize: 'xx-large'
    };

    let {teamAMove, teamAPoints, teamBPoints} = gameState

    return (
        <Col className="my-auto">
            <h1 className="pl-5" style={teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[0]} {teamAPoints}</h1>
            <h1 className="pl-5" style={!teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[1]} {teamBPoints}</h1>
        </Col>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(Leaderboard);