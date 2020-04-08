import React from "react"
import "./QuestionCard.css"
import TextField from '@material-ui/core/TextField';

function QuestionCard({question, answer, points}){
    return (
        <div className="question-card">
            <h1 className="quesion-card">{ points }</h1>
            <h2 className="quesion-card">{ question }</h2>
            <TextField id="outlined-basic" label="Who?" variant="outlined" />
        </div>
    );
}

export default QuestionCard;