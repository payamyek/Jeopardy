import React from "react";
import {Card, CardText} from "reactstrap";
import {connect} from "react-redux";
import {isCategoryCompleted} from "../../services/handleGameState";
import "../../assets/styles/CategoryCard.css"


const CategoryCard = ({categoryName, categoryIndex, gameState}) => {
    const completed = isCategoryCompleted(categoryIndex, gameState.data)
    return (
        <Card className={completed ? 'card-style-completed' : 'card-style'}>
            <CardText
                className={`text-center py-3 px-2 ${completed ? 'card-text-style-completed' : 'card-text-style'}`}>
                {categoryName}
            </CardText>
        </Card>
    );
}


const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(CategoryCard);