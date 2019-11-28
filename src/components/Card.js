import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <h1>Price: {props.price}</h1>
            <p>Amount: {props.amount}</p>
            <button style={props.amount > 0 ? {display: 'block'} : {display: 'none'}}>buy</button>
        </div>
    )
}

export default Card