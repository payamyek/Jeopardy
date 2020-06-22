import React from "react";
import {Card, CardText} from "reactstrap";


let cardStyle = {
    backgroundColor: '#078a83'
}

let cardTextStyle = {
    fontWeight: 'bold', backgroundColor: '#078a83', color: 'white', fontSize: 'xx-large', fontFamily: 'Inconsolata'
}


let CategoryCard = ({ category }) =>{
    return (
         <Card style={cardStyle}>
             <CardText style={cardTextStyle} className='category-card-body text-center py-3'>
                { category }
             </CardText>
        </Card>
    );
}

export default CategoryCard;