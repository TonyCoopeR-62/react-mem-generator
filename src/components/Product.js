import React from 'react'

function Product(props) {
    function show(e) {
        e.target.parentNode.style.display = "none";
    }
    return (
        <div className="jokes">
            <h3>Name: {props.product.name}</h3>
            <p>Price: {props.product.price}</p>
            <p>Decsription: {props.product.desc}</p>
            <button onClick={show}>Hide</button>
        </div>
    )
}

export default Product