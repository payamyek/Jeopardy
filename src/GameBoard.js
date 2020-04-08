import React from "react"
import QuestionCard from "./QuestionCard"
import "./GameBoard.css"

function GameBoard({ categories, teams }) {
    return (
        <div className="game-board">
            {/*{ categories.map(cat => <CategoryColumn category={cat}></CategoryColumn>) }*/}
            {/*<Leaderboard teams={teams}></Leaderboard>*/}
            <QuestionCard question="This person would skip work for the gym" answer="Carl" points={100}/>
        </div>
    )
}

export default GameBoard;