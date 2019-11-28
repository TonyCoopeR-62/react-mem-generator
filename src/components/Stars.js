import React from 'react'

function Stars(props) {

    const starsStyle = {
        listStyleType: 'none'
    }

    return (
        <div className='stars'>
            <ul style={starsStyle}>
                <li> Name: {props.name} </li>
                <li> Weight: {props.mass} </li>
                <li> Gender: {props.gender} </li>
            </ul>
        </div>
    )
}

export default Stars