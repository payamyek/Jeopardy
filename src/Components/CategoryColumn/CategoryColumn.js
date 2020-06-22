import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import PointCard from "../PointCard/PointCard";
import {Col} from "reactstrap"


function CategoryColumn({category, data, categoryIndex}){
    return (
        <Col>
            <CategoryCard category={category}/>
            {data.map(entry => <PointCard
                points={entry["Points"]}
                category={category}
                categoryIndex={categoryIndex}
                question={entry["Question"]}
                hint={entry["Hint"]}
            />)}
        </Col>
    );
}

export default CategoryColumn;

