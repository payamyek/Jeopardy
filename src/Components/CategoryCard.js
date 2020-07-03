import React from "react";
import {Card, CardText} from "reactstrap";
import {connect} from "react-redux";
import {isCategoryCompleted} from "../Services/handleGameState";


function CategoryCard({category, categoryIndex, gameState}) {

    const categoryCompleted = isCategoryCompleted(categoryIndex, gameState.data)

    const cardStyle = {
        backgroundColor: categoryCompleted ? 'black' : '#078a83'
    }

    const cardTextStyle = {
        backgroundColor: categoryCompleted ? 'black' : '#078a83',
        textDecoration: categoryCompleted ? 'line-through' : 'none',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '2vw',
        fontFamily: 'Inconsolata',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }

    return (
        <Card style={cardStyle}>
            <CardText style={cardTextStyle} className='category-card-body text-center py-3 px-2'>
                {category}
            </CardText>
        </Card>
    );
}


const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(CategoryCard);