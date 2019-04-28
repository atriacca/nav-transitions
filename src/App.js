import React, { Component } from 'react'
import Navbar from './Navbar'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    navToggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    render(){
        return (
            <div className="app-container">
                <div 
                    onClick={this.navToggler}
                    className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}></div>
                <button onClick={this.navToggler}>|||</button>
                <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
                <h1>My website</h1>
                <p>Loremm ipsum dolor sit amet consectetur adipisicing elit. Iusto iure nihil perferendis quia vitae, voluptates fugit earum enim odio culpa commodi soluta reiciendis alias corporis unde aspernatur ducimus dignissimos quam.</p>
            </div>
        )
    }
}

export default App