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
import '../Assets/AwesomeButton.css'
import {connect} from "react-redux";
import {
    updateFXSoundSettings,
    updateMusicSoundSettings,
} from "../Redux/ActionCreators/UpdateSettings";
import "./Slide.css"


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
                <Row className='px-4 pt-4 pb-2'>
                    <p style={{overflow:'hidden', fontSize: 'large', fontFamily: 'Inconsolata', color:'white',
                        whiteSpace: 'nowrap', textOverflow: 'ellipsis'}} className='text-center'>
                        This is a long piece of text boi man
                    </p>
                </Row>
                <Row className="px-4 pb-4 text-center">
                    <Col>
                        <FontAwesomeIcon icon={faBackward} color='white' className='fa-lg'/>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faPlay} color='white' className='fa-lg'/>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faForward} color='white' className='fa-lg'/>
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
                                <Slider value={props.settings.musicVolume}
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
                                <Slider value={props.settings.fxVolume}
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
    updateMusicVolume: musicVolume => dispatch(updateMusicSoundSettings(musicVolume)),
    updateFXVolume: fxVolume => dispatch(updateFXSoundSettings(fxVolume)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);