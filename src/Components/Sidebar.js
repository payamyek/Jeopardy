import React from "react";
import Settings from "./Settings";
import Leaderboard from "./Leaderboard";
import {Col} from "react-bootstrap";


function Sidebar(props) {
    return (
        <Col>
            <Settings/>
        </Col>
    )
}

export default Sidebar;