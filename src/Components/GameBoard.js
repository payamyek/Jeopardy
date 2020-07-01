import React from "react"
import CategoryColumn from "./CategoryColumn";
import data from "../Assets/sampleGameData";
import {Row} from "reactstrap"
import {connect} from "react-redux";
import GameOver from "./GameOver";
import Sidebar from "./Sidebar"
import wiimusic from "../Assets/wiimusic.mp3";
import Sound from "react-sound";


function GameBoard(props) {
    return (
        <Row className='pt-2'>
            {props.gameState.winner ? <GameOver/> :
                <>
                    {
                        Object.keys(data).map((key, i) =>
                            <CategoryColumn categoryIndex={i} category={key} data={data[key]}/>)
                    }
                    <Sidebar teams={props.teams}/>
                </>
            }
            <Sound url={wiimusic} autoLoad={true} loop={true} volume={props.settings.musicVolume}
                   playStatus={Sound.status.PLAYING}/>
        </Row>
    )
}

const mapStateToProps = ({gameState, settings}) => ({
    gameState,
    settings
});


export default connect(mapStateToProps)(GameBoard);