import React, {Component} from 'react'

class MemeGenetator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            image: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [] 
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(responce => responce.json())
            .then(responce => {
                const {memes} = responce.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                })
            })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const int = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const newurl = this.state.allMemeImgs[int].url
        this.setState({
            image: newurl
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render () {
        return (
            <>
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.topText} onChange={this.handleChange} placeholder="Top Text" name="topText" />
                    <input type="text" value={this.state.bottomText} onChange={this.handleChange} placeholder="Bottom Text" name="bottomText" />
                    <button>Gen</button>
                </form>
            </div>
            <div className="meme">
                <img src={this.state.image} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
            </>
        )
    }
}

export default MemeGenetator