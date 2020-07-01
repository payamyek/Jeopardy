import React from "react"
import {Row} from "reactstrap";
import {connect} from "react-redux";


let h1StyleDefault = {
    fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'white', fontSize: 'xx-large'
};

let h1StyleTurn = {
    fontWeight: 'bolder', fontFamily: 'Inconsolata', color: 'chartreuse', fontSize: 'xx-large'
};

function Leaderboard({teams, gameState}) {

    let {teamAMove, teamAPoints, teamBPoints} = gameState

    return (
        <Row className="justify-content-center pt-5" fullheight>
            <h1 style={teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[0]} {teamAPoints}</h1>
            <h1 style={!teamAMove ? h1StyleTurn : h1StyleDefault}>{teams[1]} {teamBPoints}</h1>
        </Row>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(Leaderboard);