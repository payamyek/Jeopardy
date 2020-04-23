import React from "react"
import "./Leaderboard.css"
import {connect} from "react-redux";

function Leaderboard({teams, teamAScore, teamBScore, turnA}) {
    return (
        <div className="leaderboard">
            <h1 className={ turnA ? "leaderboard-turn" : "leaderboard-default" }>{teams[0]} {teamAScore}</h1>
            <h1 className={ !turnA ? "leaderboard-turn" : "leaderboard-default"}>{teams[1]} {teamBScore}</h1>
        </div>
    )
}

const mapStateToProps = ({ teamAScore, teamBScore }) => ({
    teamAScore,
    teamBScore
});


export default connect(mapStateToProps)(Leaderboard);