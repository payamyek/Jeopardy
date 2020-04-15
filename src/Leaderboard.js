import React from "react"
import "./Leaderboard.css"

function Leaderboard({teams, scoreA, scoreB, turnA}) {
    return (
        <div className="leaderboard">
            <h1 className={ turnA ? "leaderboard-turn" : "leaderboard-default" }>{teams[0]} {scoreA}</h1>
            <h1 className={ !turnA ? "leaderboard-turn" : "leaderboard-default"}>{teams[1]} {scoreB}</h1>
        </div>
    )
}

export default Leaderboard;