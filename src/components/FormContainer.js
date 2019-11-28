import React from 'react'
import FormComponent from './FormComponent'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            diet: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            name: this.state.firstName,
            surname: this.state.lastName,
            gender: this.state.gender,
            age: this.state.age,
            location: this.state.location,
            diet: this.state.diet
        })
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({
                    diet : checked
        }       
        ) : this.setState({[name] : [value]})
        
    }

    render () {
        return (
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form