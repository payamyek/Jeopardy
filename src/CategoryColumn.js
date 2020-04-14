import React from "react";
import CategoryCard from "./CategoryCard";
import PointCard from "./PointCard";
import "./CategoryColumn.css"


function CategoryColumn({category, data , updateScoreA, updateScoreB, changeTurn, turnA}){
    return (
        <div className="category-column">
            <CategoryCard category={category}/>
            {
                data.map(e => <PointCard points={e["Points"]}
                                         question={e["Question"]}
                                         hint={e["Hint"]}
                                         updateScoreA={updateScoreA}
                                         updateScoreB={updateScoreB}
                                         changeTurn={changeTurn}
                turnA={turnA}/>)
            }
        </div>
    );
}

export default CategoryColumn;

