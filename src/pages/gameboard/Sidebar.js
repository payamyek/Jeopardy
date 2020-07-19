import React from "react";
import Settings from "./Settings";
import ScoreBoard from "./ScoreBoard";
import {Col} from "react-bootstrap";


const Sidebar = (props) => {
    return (
        <Col>
            <Settings/>
            <ScoreBoard teams={props.teams}/>
        </Col>
    )
}

export default Sidebar;