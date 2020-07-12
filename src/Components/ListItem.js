import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faCalculator, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'

import '../Styles/ListItem.css'
import UncontrolledTooltip from "reactstrap/lib/UncontrolledTooltip";

const ListItem = (props) => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(102)

    const onClick = () => {
        if (liked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLiked(!liked)
    }

    return (
        <Container className="list-item cursor-pointer no-select grow-little my-3">
            <Row className="py-2">
                <Col className="my-auto" md={4}>
                    <Link to={`/game/${props.id}`} className="plain-link">
                        <FontAwesomeIcon icon={faPlayCircle} size="2x" className="grow text-white"/>
                    </Link>
                    <span className="h3 mx-3">Calculus Me</span>
                </Col>
                <Col className="my-auto" md={6}>
                    <span className="h5">10,123 Plays</span>
                    <FontAwesomeIcon className='ml-3 text-pop-up-top-hover vibrate-hover' icon={faBirthdayCake}/>
                    <span className="h5 ml-2 hear">July 10, 2015</span>
                </Col>
                <Col className="my-auto" md={2}>
                    <span className="h5 mr-1">{likes}</span>
                    <FontAwesomeIcon icon={liked ? faHeart : farHeart} className="heartbeat " onClick={onClick}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ListItem;