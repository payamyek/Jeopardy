import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faCalculator, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'

import '../Styles/ListItem.css'

const ListItem = (props) => {
    const {
        id = 1,
        name = 'Calculus Me',
        creationDate = 'July 19, 2020',
        plays = 1234,
        hearts = 123
    } = props

    const [hearted, setHearted] = useState(false)
    const [userHearted, setUserHearted] = useState(hearts)

    const onClick = () => {
        if (hearted) {
            setUserHearted(userHearted - 1)
        } else {
            setUserHearted(userHearted + 1)
        }
        setHearted(!hearted)
    }

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
                        {creationDate}
                    </span>
                    <span className="h5 ml-2">
                        {`${plays.toLocaleString()} Plays`}
                    </span>
                </Col>
                <Col className="my-auto" md={2}>
                    <FontAwesomeIcon icon={hearted ? faHeart : farHeart} className="heartbeat" onClick={onClick}/>
                    <span className="h5 ml-2">
                        {userHearted.toLocaleString()}
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default ListItem;