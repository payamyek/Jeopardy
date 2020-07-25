import React from "react"
import {Input} from "reactstrap";

const CheckBox = (props) => {
    const {text = 'Math (5)', className = 'h6'} = props

    return (
        <span className={className}>
            <Input type="checkbox"/>
            {text}
        </span>
    )
}

export default CheckBox;