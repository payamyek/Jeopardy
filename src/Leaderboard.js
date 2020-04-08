import React, { useState } from "react"
import "./Leaderboard.css"

function Leaderboard({teams}) {
    let [team1Score, team1SetPoints] = useState(0)
    let [team2Score, team2SetPoints] = useState(0)

    return (
        <div className="leaderboard">
            <h1 className="leaderboard">Leaderboard</h1>
            <p className="leaderboard">{teams[0]} {team1Score} pts</p>
            <p className="leaderboard">{teams[1]} {team2Score} pts</p>
        </div>
    )
}

export default Leaderboard;