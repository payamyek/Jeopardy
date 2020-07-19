import React, {useState} from "react";
import {Input, Row, Col, Container, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap";
import {connect} from "react-redux";
import {searchList, sortList} from "../../redux/action-creators/updateGameList";

import '../../assets/styles/ListSidebar.css'

const ListSidebar = (props) => {
    const [sort, setSort] = useState('Default')

    const dropdownValues = [
        'Plays: lowest first', 'Plays: highest first', 'Hearts: lowest first', 'Hearts: highest first',
        'Creation Date: lowest first', 'Creation Date: highest first'
    ]

    const handleOnClick = x => {
        setSort(x)
        props.sortList(x)
    }

    return (
        <Container fluid className="list-sidebar p-3 mt-3">
            <Row>
                <Col>
                    <span className="text-white font-14 mr-2">Sort By:</span>
                    <UncontrolledDropdown className="d-inline">
                        <DropdownToggle caret>
                            {sort}
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                dropdownValues.map((x, index) => (
                                    <DropdownItem key={`dropdownItem${index}`} onClick={() => handleOnClick(x)}>
                                        <span className={sort === x ? 'text-primary' : ''}>{x}</span>
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Input placeholder="Search" onChange={e => props.searchList(e.target.value)}/>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    searchList: query => dispatch(searchList(query)),
    sortList: sortFilter => dispatch(sortList(sortFilter))
});

export default connect(
    null,
    mapDispatchToProps
)(ListSidebar);