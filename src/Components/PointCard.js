import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {Card, CardText, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import displayNotification from "./ToastNotification"

import rubber_duck from "../Assets/rubber_duck.mp3";
import party_horn from "../Assets/party_horn.mp3";
import snackbarResponse from "../Constants/snackbarResponse";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import useSound from 'use-sound';
import {random} from "lodash";
import {compareTwoStrings} from "string-similarity";
import {updatePoints, updateTeamAMove} from "../Redux/ActionCreators/updateGameState";
import {connect} from "react-redux";


function PointCard(props) {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal)

    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)

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
            }
            props.updateTurn()
            displayNotification(randomResponse(snackbarResponse["incorrect"]), false);
            playIncorrectSong()
        }
    };

    const onMouseOver = e => active && (e.target.style.background = '#41e3da')

    const onMouseOut = e => active && (e.target.style.background = 'lightseagreen')

    const cardBodyStyle = {
        backgroundColor: active ? 'lightseagreen' : 'black',
        cursor: active ? 'pointer' : 'default',
        borderRadius: '2%'
    }

    const cardTextStyle = {
        backgroundColor: active ? 'lightseagreen' : 'black',
        color: 'white',
        borderRadius: '2%',
        fontSize: '2.2vw',
        fontFamily: 'Inconsolata',
        textDecoration: active ? 'none' : 'line-through'
    }

    return (
        <Card className="my-2 glowing-div" style={cardBodyStyle} >
            <CardText className='text-center py-5 animate__shakeX' onMouseOver={onMouseOver} onMouseOut={onMouseOut}
                      style={cardTextStyle}
                      onClick={active ? toggle : null}>
                {props.points}
            </CardText>
            <Modal isOpen={showModal} toggle={toggle} keyboard={false} backdrop='static' centered>
                <ModalHeader>
                    {props.category}
                    {' '}{' '}{' '}
                    {props.gameState.stealActive && <FontAwesomeIcon icon={faExchangeAlt} color='green'/>}
                </ModalHeader>
                <ModalBody>
                    <p style={{fontSize: '1.3vw'}}>{props.hint}</p>
                    <Input type="text"
                           placeholder="Question"
                           style={{fontSize: '1vw'}}
                           onChange={e => setAnswer(`${e.target.value}`)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit} style={{fontSize: '0.8vw'}}>Submit</Button>
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
    updateTurn: () => dispatch(updateTeamAMove())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PointCard);