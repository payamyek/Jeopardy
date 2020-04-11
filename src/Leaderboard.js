import React, { useState } from "react"
import "./Leaderboard.css"

function Leaderboard({teams, scoreA, scoreB}) {
    return (
        <div className="leaderboard">
            <h1 className="leaderboard">Leaderboard</h1>
            <p className="leaderboard">{teams[0]} {scoreA} pts</p>
            <p className="leaderboard">{teams[1]} {scoreB} pts</p>
        </div>
    )
}

export default Leaderboard;