import React from "react"
import {Row} from "reactstrap";
import {connect} from "react-redux";
import "../../assets/styles/ScoreBoard.css"

function ScoreBoard({teams, gameState}) {
    const {teamAMove, teamAPoints, teamBPoints} = gameState

    return (
        <div className='align-self-center'>
            <Row className="pl-4 pt-5">
                <h1 className={teamAMove ? 'h1-style-turn' : 'h1-style-default'}>
                    {teams[0]} {teamAPoints}
                </h1>
            </Row>
            <Row className="pl-4">
                <h1 className={!teamAMove ? 'h1-style-turn' : 'h1-style-default'}>
                    {teams[1]} {teamBPoints}
                </h1>
            </Row>
        </div>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(ScoreBoard);