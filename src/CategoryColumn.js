import React from "react";
import CategoryCard from "./CategoryCard";
import PointCard from "./PointCard";
import "./CategoryColumn.css"

const GameOnePreset = {
    "Co-Workers": [
        {
            "Points": 100,
            "Hint": "This person's keyboard sounds like a jackhammer drilling in your ear",
            "Question": "Who is Kevin?"
        },
        {
            "Points": 200,
            "Hint": "This person has been known to address Carl as Kevin",
            "Question": "Who is Jason?"
        },
        {
            "Points": 300,
            "Hint": "This person would ask you for a ride home from work",
            "Question": "Who is Carl?"
        },
        {
            "Points": 400,
            "Hint": "This person would order spring rolls at a steakhouse",
            "Question": "Who is Payam?"
        },
        {
            "Points": 500,
            "Hint": "This person doesn't believe in drinking coffee",
            "Question": "Who is Anand?"
        }
    ]
}

function CategoryColumn({category, updateScoreA, updateScoreB}){
    return (
        <div className="category-column">
            <CategoryCard category={category}/>
            { GameOnePreset["Co-Workers"]
                .map(e => <PointCard points={e["Points"]} question={e["Question"]} hint={e["Hint"]}
                                     updateScoreA={updateScoreA} updateScoreB={updateScoreB}/>)
            }
        </div>
    );
}

export default CategoryColumn;

