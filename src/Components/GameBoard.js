import React from "react"
import CategoryColumn from "./CategoryColumn";
import Leaderboard from "./Leaderboard";
import data from "../Assets/sampleGameData";
import {Row} from "reactstrap"
import {connect} from "react-redux";
import GameOver from "./GameOver";


function GameBoard(props) {
    let generateGameBoard = () => {
        let columns = Object.keys(data)
        let result = []
        for (let i = 0; i < 5; i++) {
            result[i] = <CategoryColumn categoryIndex={i} category={columns[i]} data={data[columns[i]]}/>
        }
        return result
    }

    return (
        <Row>
            {props.gameState.winner ? <GameOver/> :
                <>
                    {generateGameBoard()}
                    <Leaderboard teams={props.teams}/>
                </>
            }
        </Row>
    )
}

const mapStateToProps = ({gameState}) => ({
    gameState
});


export default connect(mapStateToProps)(GameBoard);