import React from "react";
import CategoryCard from "./CategoryCard";
import PointCard from "./PointCard";
import "./CategoryColumn.css"

function CategoryColumn({category}){
    return (
        <div className="category-column">
            { generateColumn(category) }
        </div>
    );
};

function generateColumn(category) {
    let arr = []
    arr[0] = <CategoryCard category={category}></CategoryCard>

    for (let x = 1; x <= 5; x++){
        arr[x] = <PointCard points={x * 100}></PointCard>
    }
    return arr
}

export default CategoryColumn;

