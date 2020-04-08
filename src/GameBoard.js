import React from "react"
import CategoryColumn from "./CategoryColumn";
import Leaderboard from "./Leaderboard";
import "./GameBoard.css"

function GameBoard({ categories, teams }) {
    return (
        <div className="game-board">
            { categories.map(cat => <CategoryColumn category={cat}/>) }
            <Leaderboard teams={teams}/>
            {/* <QuestionCard question="This person would skip work for the gym" answer="Carl" points={100}/> */}
        </div>
    )
}

export default GameBoard;