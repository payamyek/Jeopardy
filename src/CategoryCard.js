import React from "react"
import "./CategoryCard.css"

function CategoryCard({ category }){
    return (
        <div className="category-card">
            <p>{ category }</p>
        </div>
    );
}

export default CategoryCard;