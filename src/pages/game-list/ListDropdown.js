import React, {useState} from "react";
import classnames from 'classnames'
import {Col, Row, Collapse, Container} from "reactstrap";
import CheckBox from "../../components/CheckBox";
import LineBreak from "../../components/LineBreak";
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {resetQueryResults, searchList, sortList, tagFilter} from "../../redux/action-creators/updateGameList";
import {connect} from "react-redux";

const ListDropdown = (props) => {
    const {
        text = 'Category',
        options = ['Math', 'Science']
    } = props

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container className="pl-0 mt-3">
            <Row>
                <Col md={8}>
                    <span className="h5 cursor-pointer no-select" onClick={toggle}>{text}</span>
                </Col>
                <Col md={4} className="text-right">
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Collapse isOpen={isOpen}>
                        <div className="ml-4 mt-2">
                            {
                                options.map((label, i) =>
                                    <Row className={classnames({'mt-2': i !== 1})}>
                                        <Col>
                                            <CheckBox text={label}
                                                      onClick={() => props.tagFilter(label)}
                                                      reset={() => props.resetQueryResults()}
                                            />
                                        </Col>
                                    </Row>
                                )
                            }
                        </div>
                    </Collapse>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LineBreak/>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    tagFilter: tag => dispatch(tagFilter(tag)),
    resetQueryResults: () => dispatch(resetQueryResults())
});

export default connect(
    null,
    mapDispatchToProps
)(ListDropdown);