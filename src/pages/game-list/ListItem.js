import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col, Badge} from "reactstrap";
import {faPlayCircle, faShareSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'

import '../../assets/styles/ListItem.css'

const ListItem = (props) => {
    const {
        id = 1,
        name = 'Calculus Me',
        creationDate = 1595122633,
        plays = 1234,
        hearts = 123,
        tags = ['#tag']
    } = props

    const [hearted, setHearted] = useState(false)

    return (
        <Container className="list-item cursor-pointer no-select grow-little my-3">
            <Row className="py-2">
                <Col className="my-auto" md={4}>
                    <Link to={`/game/${id}`} className="plain-link">
                        <FontAwesomeIcon icon={faPlayCircle} size="2x" className="grow text-white"/>
                    </Link>
                    <span className="h3 mx-3">
                       {name}
                    </span>
                </Col>
                <Col className="my-auto" md={6}>
                    <FontAwesomeIcon className='ml-3 text-pop-up-top-hover vibrate-hover' icon={faBirthdayCake}/>
                    <span className="h5 ml-2 hear">
                        {(new Date(creationDate * 1000)).toDateString()}
                    </span>
                    <span className="h5 ml-2">
                        {`${plays.toLocaleString()} Plays`}
                    </span>
                </Col>
                <Col className="my-auto" md={2}>
                    <FontAwesomeIcon icon={hearted ? faHeart : farHeart} className="heartbeat"
                                     onClick={() => setHearted(!hearted)}/>
                    <span className="h5 ml-2">
                        {(hearted ? hearts + 1 : hearts).toLocaleString()}
                    </span>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    {
                        tags.map(tag => <span className="h5"><Badge className="mb-2 mr-2">{tag}</Badge></span>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ListItem;