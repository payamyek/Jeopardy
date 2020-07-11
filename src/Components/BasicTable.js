import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Row, Col} from "react-bootstrap";
import {faPlusCircle, faSlidersH} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UncontrolledTooltip, ButtonGroup, Button} from "reactstrap";
import {AwesomeButton} from "react-awesome-button";
import {Link} from "react-router-dom"

const BasicTable = (props) => {

    const {SearchBar} = Search;

    const NoDataIndication = () => <h2>No Data Found</h2>;

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total text-white ml-2">
            Showing {from} to {to} of {size} Results
        </span>
    );

    const sizePerPageRenderer = ({options, currSizePerPage, onSizePerPageChange}) => (
        <ButtonGroup className="m-2">
            {
                options.map(option => (
                    <Button
                        key={option.text}
                        type="button"
                        onClick={() => onSizePerPageChange(option.page)}
                        className={`btn ${currSizePerPage === `${option.page}` ? 'btn-secondary active' : 'btn-secondary'}`}
                    >
                        {option.text}
                    </Button>
                ))
            }
        </ButtonGroup>
    );

    const pageButtonRenderer = ({page, active, disable, title, onPageChange}) => <div/>

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageRenderer,
        pageButtonRenderer,
        sizePerPageList: [{
            text: '15', value: 15
        }, {
            text: '30', value: 30
        }, {
            text: '45', value: 45
        }, {
            text: 'All', value: props.data.length
        }]
    };

    return (
        <ToolkitProvider
            keyField={props.keyField}
            data={props.data}
            columns={props.columns}
            search>
            {
                props => (
                    <div>
                        <Row>
                            <Col className="m-2">
                                <Link to="create">
                                    <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        size="2x"
                                        className="text-success cursor-pointer"
                                        id="plusButton"
                                    />
                                    <UncontrolledTooltip target="plusButton" placement="right">
                                        Create New Game
                                    </UncontrolledTooltip>
                                </Link>
                            </Col>
                            <Col className="text-right m-2">
                                <SearchBar {...props.searchProps}/>
                            </Col>
                        </Row>
                        <BootstrapTable
                            {...props.baseProps}
                            pagination={paginationFactory(options)}
                            classes='table-dark'
                            hover
                            noDataIndication={NoDataIndication}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    )
}

export default BasicTable;