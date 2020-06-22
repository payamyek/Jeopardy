import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Card, CardText, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"

import rubber_duck from "../../Assets/rubber_duck.mp3";
import party_horn from "../../Assets/party_horn.mp3";
import snackbarResponse from "../../Assets/snackbarResponse";

import Sound from "react-sound";
import {random} from "lodash";
import {compareTwoStrings} from "string-similarity";

import {updatePoints, updateTeamAMove} from "../../Redux/ActionCreators/UpdateGameState";

import {connect} from "react-redux";


function PointCard(props) {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal)

    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)

    const [showIncorrectSnackbar, setShowIncorrectSnackbar] = useState(false)
    const [showCorrectSnackbar, setShowCorrectSnackbar] = useState(false)

    const [playCorrectSong, setPlayCorrectSong] = useState(false)
    const [playIncorrectSong, setPlayIncorrectSong] = useState(false)

    const randomResponse = arr => arr[random(0, arr.length - 1)];

    const Alert = props => <MuiAlert elevation={6} variant="filled" {...props}/>;

    useEffect(() => {
        if (showModal) {
            setShowIncorrectSnackbar(false)
            setShowCorrectSnackbar(false)
            setPlayCorrectSong(false)
            setPlayIncorrectSong(false)
        }
    }, [showModal])

    const handleSubmit = () => {
        const diceCoefficient = compareTwoStrings(answer.toLowerCase().trim(), props.question.toLowerCase().trim())

        if (diceCoefficient >= 0.8) {
            props.updatePoints(props.categoryIndex, props.points)
            setShowCorrectSnackbar(!showCorrectSnackbar)
            setPlayCorrectSong(!playCorrectSong)
            setActive(false)
        } else {
            props.updateTurn()
            setShowIncorrectSnackbar(!showIncorrectSnackbar)
            setPlayIncorrectSong(!playIncorrectSong)
        }
        setShowModal(!showModal)
    };

    const handleCloseCorrectSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowCorrectSnackbar(false);
        setPlayCorrectSong(false)
    };

    const handleCloseIncorrectSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowIncorrectSnackbar(false);
        setPlayIncorrectSong(false);
    };

    const onMouseOver = e => {
        if (active) {
            e.target.style.background = '#41e3da'
        }
    }

    const onMouseOut = e => {
        if (active) {
            e.target.style.background = 'lightseagreen'
        }
    }

    let cardBodyStyle = {
        backgroundColor: active ? 'lightseagreen' : 'black'
    }

    let cardTextStyle = {
        backgroundColor: active ? 'lightseagreen' : 'black',
        color: 'white',
        borderRadius: '2%',
        fontSize: 'xx-large',
        fontFamily: 'Inconsolata',
        textDecoration: active ? 'none' : 'line-through'
    }

    return (
        <>
            <Card className="my-2" style={cardBodyStyle}>
                <CardText className='text-center py-5' onMouseOver={onMouseOver}  onMouseOut={onMouseOut}
                          style={cardTextStyle}
                          onClick={active ? toggle : null}>
                    {props.points}
                </CardText>
                <Modal isOpen={showModal} toggle={toggle} centered>
                    <ModalHeader>{props.category}</ModalHeader>
                    <ModalBody>
                        <p style={{fontSize: 'large'}}>{props.hint}</p>
                        <Input type="text" placeholder="Question" onChange={e => setAnswer(`${e.target.value}`)}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Sound url={rubber_duck} volume={100}
                       playStatus={playCorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
                <Sound url={party_horn} volume={100}
                       playStatus={playIncorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
            </Card>
            <Snackbar open={showCorrectSnackbar} autoHideDuration={5000} onClose={handleCloseCorrectSnackbar}>
                <Alert style={{fontSize: 'medium'}} severity="success">{
                    randomResponse(snackbarResponse["correct"])}
                </Alert>
            </Snackbar>
            <Snackbar open={showIncorrectSnackbar} autoHideDuration={5000} onClose={handleCloseIncorrectSnackbar}>
                <Alert style={{fontSize: 'medium'}} severity="error">
                    {randomResponse(snackbarResponse["incorrect"])}
                </Alert>
            </Snackbar>
        </>
    );
}

const mapStateToProps = ({gameState}) => ({
    gameState
});

const mapDispatchToProps = dispatch => ({
    updatePoints: (category, points) => dispatch(updatePoints(category, points)),
    updateTurn: () => dispatch(updateTeamAMove())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PointCard);