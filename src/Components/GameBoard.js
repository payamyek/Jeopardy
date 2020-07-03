import React from "react"
import CategoryColumn from "./CategoryColumn";
import data from "../Constants/sampleGameData";
import {Row} from "reactstrap"
import {connect} from "react-redux";
import GameOver from "./GameOver";
import Sidebar from "./Sidebar"
import Sound from "react-sound";
import {updateMusicNext} from "../Redux/ActionCreators/updateSettings";


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