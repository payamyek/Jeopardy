import React from "react";
import {Input} from "reactstrap";
import {connect} from "react-redux";
import {searchList} from "../Redux/ActionCreators/updateGameList";

import '../Styles/ListSidebar.css'

const ListSidebar = (props) => {

    return (
        <div className="list-sidebar p-2 my-3">
            <Input placeholder="Search" onChange={e => props.searchList(e.target.value)}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    searchList: query => dispatch(searchList(query)),
});

export default connect(
    null,
    mapDispatchToProps
)(ListSidebar);