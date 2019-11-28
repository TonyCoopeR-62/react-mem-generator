import React from 'react'

function Joke(props) {
    return (
        <div className="jokes">
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p><br/>
            <p style={{color: !props.question && "red"}}>Answer: {props.punchline}</p>
        </div>
    )
}

export default Joke