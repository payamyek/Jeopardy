import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {Card, CardText, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import displayNotification from "./ToastNotification"

import rubber_duck from "../Assets/rubber_duck.mp3";
import party_horn from "../Assets/party_horn.mp3";
import snackbarResponse from "../Constants/snackbarResponse";
import {faExchangeAlt, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import useSound from 'use-sound';
import {random} from "lodash";
import {compareTwoStrings} from "string-similarity";
import {killCard, updatePoints, updateTeamAMove} from "../Redux/ActionCreators/updateGameState";
import {connect} from "react-redux";
import '../Styles/PointCard.css'


function PointCard(props) {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal)

    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)
    const [killed, setKilled] = useState(false)

    const [playCorrectSong] = useSound(rubber_duck, {volume: props.settings.fx.volume / 100});
    const [playIncorrectSong] = useSound(party_horn, {volume: props.settings.fx.volume / 100})

    const randomResponse = arr => arr[random(0, arr.length - 1)];

    const handleSubmit = () => {
        const diceCoefficient = compareTwoStrings(answer.toLowerCase().trim(), props.question.toLowerCase().trim())

        if (diceCoefficient >= 0.8) {
            props.updatePoints(props.categoryIndex, props.points)
            displayNotification(randomResponse(snackbarResponse["correct"]), true);
            playCorrectSong()
            setActive(false)
            setShowModal(!showModal)
        } else {
            if (props.gameState.stealActive === true) {
                setShowModal(!showModal)
                setActive(false)
                setKilled(true)
                props.killCard(props.categoryIndex, props.points)
                displayNotification(props.question, false);
            } else {
                displayNotification(randomResponse(snackbarResponse["incorrect"]), false);
            }
            props.updateTurn()
            playIncorrectSong()
        }
    };

    return (
        <Card className={`my-2 ${active ? 'card-body-style-active' : 'card-body-style-inactive'}`}>
            <CardText
                className={`text-center py-5 ${active ? 'card-text-style-active' : 'card-text-style-inactive'}`}
                onClick={active ? toggle : null}
            >
                {killed ? <FontAwesomeIcon icon={faSkullCrossbones} className='fa-lg'/> : props.points}
            </CardText>
            <Modal isOpen={showModal} toggle={toggle} keyboard={false} backdrop='static' centered>
                <ModalHeader>
                    {props.categoryName}
                    {' '}{' '}{' '}
                    {props.gameState.stealActive && <FontAwesomeIcon icon={faExchangeAlt} color='green'/>}
                </ModalHeader>
                <ModalBody>
                    <p className='modal-body-element'>
                        {props.hint}
                    </p>
                    <Input
                        className='modal-body-element'
                        type="text"
                        placeholder="Question"
                        onChange={e => setAnswer(`${e.target.value}`)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button className='modal-footer-element' color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        </Card>
    );
}

const mapStateToProps = ({gameState, settings}) => ({
    gameState,
    settings
});

const mapDispatchToProps = dispatch => ({
    updatePoints: (category, points) => dispatch(updatePoints(category, points)),
    updateTurn: () => dispatch(updateTeamAMove()),
    killCard: (category, points) => dispatch(killCard(category, points))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PointCard);