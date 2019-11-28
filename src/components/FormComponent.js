import React from 'react'


function FormComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="input">
                    <label>Name</label><br />
                    <input type="text" 
                        placeholder="Your Name" 
                        onChange={props.handleChange} 
                        name="firstName" 
                        value={props.data.firstName}/>
                        <br />
                    <label>Surname</label><br />
                    <input type="text" 
                        placeholder="Surname" 
                        onChange={props.handleChange} 
                        name="lastName" 
                        value={props.data.lastName}/>
                        <br />
                    <label>Age</label><br />
                    <input type="number" 
                        onChange={props.handleChange} 
                        name="age" 
                        value={props.data.age}/>
                        <br />
                </div>
                <div className="country">
                    <input type="radio" 
                        value="female" 
                        onChange={props.handleChange} 
                        name="gender" />Female
                    <input type="radio" 
                        value="male" 
                        onChange={props.handleChange} 
                        name="gender" />Male
                    <input type="radio" 
                        value="trans" 
                        onChange={props.handleChange} 
                        name="gender" />Trans
                </div>
                <div className="country">
                    <label>Russia</label>
                    <input type="radio" 
                        onChange={props.handleChange} 
                        name="location" 
                        value="Russia" /><br />
                    <label>Dominican Rep</label>
                    <input type="radio" 
                        onChange={props.handleChange} 
                        name="location" 
                        value="Dominican Rep"/><br />
                    <label>USA</label>
                    <input type="radio" 
                        onChange={props.handleChange} 
                        name="location" 
                        value="USA"/><br />
                </div>
                <div className="checks">
                    <label>Diet restrictions: </label><br />
                    <label>Milk</label><br />
                    <input type="checkbox" 
                        onChange={props.handleChange} 
                        name="diet" 
                        value=" Milk"
                        checked={props.data.diet.milk} /><br />
                    <label>Meat</label><br />
                    <input type="checkbox" 
                        onChange={props.handleChange} 
                        name="diet" 
                        value=" Meat"
                        checked={props.data.diet.meat} /><br />
                    <label>Apples</label><br />
                    <input type="checkbox" 
                        onChange={props.handleChange} 
                        name="diet" 
                        value=" Apples"
                        checked={props.data.diet.apples} /><br /> 
                </div>
                <div className="out">
                    <h1>Your name is {props.data.firstName}</h1>
                    <h1>Your surname is {props.data.lastName}</h1>
                    <h2>Gender: {props.data.gender}</h2>
                    <h2>Your age: {props.data.age} </h2>
                    <h2>Travel location: {props.data.location}</h2>
                    <h2>Diet restrictions: {props.data.diet}</h2>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent