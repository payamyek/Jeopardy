import React from "react";
import {Card, CardText} from "reactstrap";
import {connect} from "react-redux";
import {isCategoryCompleted} from "../Services/handleGameState";
import "../Styles/CategoryCard.css"


function CategoryCard({category, categoryIndex, gameState}) {

    const completed = isCategoryCompleted(categoryIndex, gameState.data)

    return (
        <Card className={completed ? 'card-style-completed' : 'card-style'}>
            <CardText
                className={`text-center py-3 px-2 ${completed ? 'card-text-style-completed' : 'card-text-style'}`}>
                {category}
            </CardText>
        </Card>
    );
}


const mapStateToProps = ({gameState}) => ({
    gameState
});

export default connect(mapStateToProps)(CategoryCard);