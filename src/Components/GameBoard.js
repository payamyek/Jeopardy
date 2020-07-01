import React from "react"
import CategoryColumn from "./CategoryColumn";
import Leaderboard from "./Leaderboard";
import data from "../Assets/sampleGameData";
import {Row} from "reactstrap"
import {connect} from "react-redux";
import GameOver from "./GameOver";


function GameBoard(props) {
    return (
        <Row>
            {props.gameState.winner ? <GameOver/> :
                <>
                    {
                        Object.keys(data).map((key, i) =>
                        <CategoryColumn categoryIndex={i} category={key} data={data[key]}/>)
                    }
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