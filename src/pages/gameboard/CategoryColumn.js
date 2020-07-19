import React from "react";
import CategoryCard from "./CategoryCard";
import PointCard from "./PointCard";
import {Col} from "reactstrap"


function CategoryColumn({data}) {
    const {categoryName, categoryIndex} = data[0];
    return (
        <Col>
            <CategoryCard categoryName={categoryName} categoryIndex={categoryIndex}/>
            {data.map(entry => <PointCard {...entry}/>)}
        </Col>
    );
}

export default CategoryColumn;

