import React from "react"
import CategoryColumn from "./CategoryColumn"

function GameBoard({ categories }) {
    return (
        <div className="game-board">
            { categories.map(cat => <CategoryColumn category={cat}></CategoryColumn>) }
        </div>
    )
}

export default GameBoard;