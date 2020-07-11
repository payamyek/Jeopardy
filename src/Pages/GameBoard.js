import React from "react"
import CategoryColumn from "../Components/CategoryColumn";
import data from "../Constants/sampleGameData";
import {Row} from "reactstrap"
import {connect} from "react-redux";
import GameOver from "../Components/GameOver";
import Sidebar from "../Components/Sidebar"
import Sound from "react-sound";
import {updateMusicNext} from "../Redux/ActionCreators/updateSettings";


const generateGameBoard = data => {
    const columns = [];
    for (let i = 0; i < 5; i++) {
        const temp = data.filter((element) => element.categoryIndex === i);
        columns.push(<CategoryColumn data={temp}/>)
    }
    return columns;
}


function GameBoard(props) {
    const teams = ['Boomer', 'Zoomer']
    return (
        <Row className='p-2'>
            {props.gameState.winner ? <GameOver/> :
                <>
                    {generateGameBoard(data)}
                    <Sidebar teams={teams}/>
                </>
            }
            <Sound url={props.settings.music.track}
                   onFinishedPlaying={() => props.updateMusicNext()}
                   volume={props.settings.music.volume}
                   playStatus={props.settings.music.playing ? Sound.status.PLAYING : Sound.status.PAUSED}
                   autoLoad
            />
        </Row>
    )
}

const mapStateToProps = ({gameState, settings}) => ({
    gameState,
    settings
});


const mapDispatchToProps = dispatch => ({
    updateMusicNext: () => dispatch(updateMusicNext())
});


export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);