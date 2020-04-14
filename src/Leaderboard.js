import React, { useState } from "react"
import "./Leaderboard.css"

function Leaderboard({teams, scoreA, scoreB}) {
    return (
        <div className="leaderboard">
            <h1 className="leaderboard">{teams[0]} {scoreA}</h1>
            <h1 className="leaderboard">{teams[1]} {scoreB}</h1>
        </div>
    )
}

export default Leaderboard;