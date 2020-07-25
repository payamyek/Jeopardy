import React from "react"

const LineBreak = (props) => {
    const {colour = 'white'} = props
    return <hr className="mt-2" style={{color: colour, backgroundColor: colour, height: 1}}/>
}

export default LineBreak;