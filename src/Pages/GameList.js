import React from "react";
import BasicTable from "../Components/BasicTable";
import {Link} from "react-router-dom";
import {Container, Card, Row, Col} from "reactstrap";
import SnowParticles from "../Components/SnowParticles";
import {faPuzzlePiece, faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UncontrolledTooltip} from "reactstrap";

const GameList = () => {

    const data = [
        {
            'id': 1,
            'name': 'Calculus',
            'category': 'Math',
            'plays': 10
        },
        {
            'id': 2,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13123
        },
        {
            'id': 3,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10
        },
        {
            'id': 4,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 5,
            'name': 'Calculus',
            'category': 'Math',
            'plays': 10123
        },
        {
            'id': 6,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13
        },
        {
            'id': 7,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10
        },
        {
            'id': 8,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 9,
            'name': 'Calculus',
            'category': 'Math',
            'plays': 10123
        },
        {
            'id': 10,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13123
        },
        {
            'id': 11,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10123
        },
        {
            'id': 12,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 13,
            'name': 'Calculus',
            'category': 'Math',
            'plays': 10
        },
        {
            'id': 14,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13
        },
        {
            'id': 15,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10
        },
        {
            'id': 16,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 17,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 18,
            'name': 'Calculus',
            'category': 'Math',
            'plays': 10
        },
        {
            'id': 19,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13
        },
        {
            'id': 20,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10
        },
        {
            'id': 21,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        },
        {
            'id': 22,
            'category': 'Math',
            'plays': 10
        },
        {
            'id': 23,
            'name': 'Calculus',
            'category': 'Science',
            'plays': 13
        },
        {
            'id': 24,
            'name': 'Calculus',
            'category': 'General',
            'plays': 10
        },
        {
            'id': 25,
            'name': 'Calculus',
            'category': 'Sports',
            'plays': 14
        }
    ]

    const actionsFormatter = (cell, row, rowIndex) => {
        return (
            <Row>
                <Col>
                    <Link to={`/game/${row.id}`}>
                        <FontAwesomeIcon icon={faPuzzlePiece} id={`play${rowIndex}`}
                                         className='text-success cursor-pointer grow'/>
                        <UncontrolledTooltip target={`play${rowIndex}`} placement="top">
                            Play Game
                        </UncontrolledTooltip>
                    </Link>
                    <Link to={`/details/${row.id}`}>
                        <FontAwesomeIcon icon={faEye} id={`view${rowIndex}`}
                                         className='ml-3 text-primary cursor-pointer grow'/>
                        <UncontrolledTooltip target={`view${rowIndex}`} placement="top">
                            View Details
                        </UncontrolledTooltip>
                    </Link>
                </Col>
            </Row>
        )
    }

    const columns = [
        {
            dataField: 'id',
            text: 'Game ID'
        },
        {
            dataField: 'name',
            text: 'Name'
        },
        {
            dataField: 'category',
            text: 'Category'
        },
        {
            dataField: 'plays',
            text: 'Total Plays',
            formatter: cell => cell.toLocaleString()
        },
        {
            isDummyField: true,
            text: 'Actions',
            formatter: actionsFormatter
        }
    ]

    return (
        <Container fluid className="my-5">
            <SnowParticles/>
            <Row>
                <Col md={2}/>
                <Col md={8}>
                    <Card className='bg-dark'>
                        <BasicTable keyField="id" data={data} columns={columns}/>
                    </Card>
                </Col>
                <Col md={2}/>
            </Row>
        </Container>
    )
}

export default GameList;
