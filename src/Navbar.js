import React from 'react'

const Navbar = props => {
    return (
        <div 
            onClick={props.navToggler}
            className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Services</p>
        </div>
    )
}

export default Navbar