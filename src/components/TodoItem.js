import React from 'react'


function TodoItem(props) {
    const completedStyle = {
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    return (
        <div className='items'>
            <input type="checkbox" id="inp" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/> 
            <p style={props.item.completed ? completedStyle : null }>{props.item.text}</p>
        </div>
    )
}

export default TodoItem