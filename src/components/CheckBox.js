import React, {useState} from "react"
import {Input} from "reactstrap";

const CheckBox = (props) => {
    const {
        text = 'Math (5)',
        className = 'h6',
        onClick,
        reset
    } = props

    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => {
        !clicked && onClick()
        clicked && reset()
        setClicked(!clicked)
    }

    return (
        <span className={className}>
            <Input type="checkbox" id={`${props.text}Checkbox`} onClick={handleOnClick}/>
            {text}
        </span>
    )
}

export default CheckBox;