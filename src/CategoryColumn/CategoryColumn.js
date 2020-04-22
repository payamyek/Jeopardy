import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import PointCard from "../PointCard/PointCard";
import "./CategoryColumn.css"


function CategoryColumn({category, data , updateScoreA, updateScoreB, changeTurn, isTeamAMove}){
    return (
        <div className="category-column">
            <CategoryCard category={category}/>
            {
                data.map(e =>
                    <PointCard
                        points={e["Points"]}
                        question={e["Question"]}
                        hint={e["Hint"]}
                        updateScoreA={updateScoreA}
                        updateScoreB={updateScoreB}
                        changeTurn={changeTurn}
                        isTeamAMove={isTeamAMove}
                    />)
            }
        </div>
    );
}

export default CategoryColumn;

