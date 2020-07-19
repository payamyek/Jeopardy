import React from "react";

import SnowParticles from "../components/SnowParticles";
import {Container, Row, Col} from "reactstrap";
import {ListItem, ListSidebar} from "./gamelist"
import {connect} from "react-redux";

const GameList = ({gameList}) => {

    return (
        <Container fluid className="my-5 enable-scroll">
            <SnowParticles/>
            <Row>
                <Col md={3} className="text-white">
                    <ListSidebar/>
                </Col>
                <Col md={6} className="overflow-y-scroll hide-scrollbar" style={{height: '95vh'}}>
                    {
                        gameList.queryResults.map((item, index) => (
                            <ListItem {...item} key={`listItem${index}`}/>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = ({gameList}) => ({
    gameList
});

export default connect(
    mapStateToProps,
    null
)(GameList);
