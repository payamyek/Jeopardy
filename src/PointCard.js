import React from "react"
import "./PointCard.css"

function PointCard({ points }) {
    return (
        <div className="game-card">
            <p>{ points }</p>
        </div>
    );
};

export default PointCard;