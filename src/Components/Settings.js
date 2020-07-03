import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSlidersH, faBackward, faForward, faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {Row, Col} from 'reactstrap'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {AwesomeButton} from "react-awesome-button";

import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import "react-awesome-button/dist/styles.css";
import '../Styles/AwesomeButton.css'
import {connect} from "react-redux";
import {
    updateFXVolume, updateMusicNext, updateMusicPrevious,
    updateMusicVolume, updatePlayMusic,
} from "../Redux/ActionCreators/updateSettings";

import Marquee from "react-smooth-marquee"
import "../Styles/Settings.css"


const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: 'teal',
            },
            track: {
                color: 'lightseagreen'
            },
            rail: {
                color: 'lightseagreen'
            }
        }
    }
});


function Settings(props) {
    const [disabled, setDisabled] = useState(true)

    return (
        <div>
            <Row className="justify-content-center">
                <AwesomeButton type='primary' ripple onPress={() => setDisabled(!disabled)}>
                    <FontAwesomeIcon icon={faSlidersH} className={"fa-2x"} color={"white"}/>
                </AwesomeButton>
            </Row>
            {!disabled && <>
                <Row className='mx-3 pt-4 pb-1 justify-content-center' style={{overflowX: 'hidden'}}>
                    <Marquee velocity={0.08}>
                        <p className='marquee-text-style'>
                            {props.settings.music.name}
                        </p>
                    </Marquee>
                </Row>
                <Row className="px-4 pb-4 text-center">
                    <Col>
                        <FontAwesomeIcon
                            style={{cursor: 'pointer'}}
                            icon={faBackward}
                            onClick={props.updateMusicPrevious}
                            color='white'
                            className='fa-lg'
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon
                            style={{cursor: 'pointer'}}
                            icon={props.settings.music.playing ? faPause : faPlay}
                            onClick={props.updatePlayMusic}
                            color='white'
                            className='fa-lg'
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon
                            style={{cursor: 'pointer'}}
                            icon={faForward}
                            onClick={props.updateMusicNext}
                            color='white'
                            className='fa-lg'
                        />
                    </Col>
                </Row>
                <Row className="px-4">
                    <p style={{color: 'white', fontFamily: 'Inconsolata', fontWeight: 'bolder'}}>
                        Music Volume
                    </p>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown style={{fill: "white"}}/>
                        </Grid>
                        <Grid item xs>
                            <ThemeProvider theme={muiTheme}>
                                <Slider value={props.settings.music.volume}
                                        onChange={(_, v) => props.updateMusicVolume(v)}
                                        aria-labelledby="continuous-slider"/>
                            </ThemeProvider>
                        </Grid>
                        <Grid item>
                            <VolumeUp style={{fill: "white"}}/>
                        </Grid>
                    </Grid>
                </Row>
                <Row className="px-4">
                    <p style={{color: 'white', fontFamily: 'Inconsolata', fontWeight: 'bolder'}}>
                        FX Volume
                    </p>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown style={{fill: "white"}}/>
                        </Grid>
                        <Grid item xs>
                            <ThemeProvider theme={muiTheme}>
                                <Slider value={props.settings.fx.volume}
                                        onChange={(_, v) => props.updateFXVolume(v)}
                                        aria-labelledby="continuous-slider"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item>
                            <VolumeUp style={{fill: "white"}}/>
                        </Grid>
                    </Grid>
                </Row>
            </>}
        </div>
    )
}

const mapStateToProps = ({settings}) => ({
    settings
});

const mapDispatchToProps = dispatch => ({
    updateMusicVolume: volume => dispatch(updateMusicVolume(volume)),
    updateFXVolume: volume => dispatch(updateFXVolume(volume)),
    updatePlayMusic: () => dispatch(updatePlayMusic()),
    updateMusicNext: () => dispatch(updateMusicNext()),
    updateMusicPrevious: () => dispatch(updateMusicPrevious())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);