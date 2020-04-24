import React from "react"
import CategoryColumn from "../CategoryColumn/CategoryColumn";
import Leaderboard from "../Leaderboard/Leaderboard";
import data from "../../Resources/sampleGameData";
import "./GameBoard.css"

function GameBoard({teams}) {

    let generateGameBoard = () => {
        let columns = Object.keys(data)
        let result = []
        for (let i = 0; i < 5; i++) {
            result[i] = <CategoryColumn category={columns[i]} data={data[columns[i]]}/>
        }
        return result
    }

    return (
        <div className="game-board">
            {generateGameBoard()}
            <Leaderboard teams={teams}/>
        </div>
    )
}

export default GameBoard;