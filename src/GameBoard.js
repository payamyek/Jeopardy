import React , { useState } from "react"
import CategoryColumn from "./CategoryColumn";
import Leaderboard from "./Leaderboard";
import "./GameBoard.css"

function GameBoard({ categories, teams }) {
    const [teamAScore, setTeamAScore] = useState(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [teamAMove, setTeamAMove] = useState(true)

    let updateScoreA = (score) => {
        setTeamAScore(teamAScore + score)
    }

    let updateScoreB = (score) => {
        setTeamBScore(teamBScore + score)
    }

    return (
        <div className="game-board">
            { categories.map(cat => <CategoryColumn category={cat}
                                                    updateScoreA={updateScoreA}
                                                    updateScoreB={updateScoreB}
                                                    changeTurn={() => setTeamAMove(!teamAMove)}
                                                    turnA={teamAMove}
            />)
            }
            <Leaderboard teams={teams} scoreA={teamAScore} scoreB={teamBScore}/>
        </div>
    )
}

export default GameBoard;