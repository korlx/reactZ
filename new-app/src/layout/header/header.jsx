import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/Page1"}>Page1</Link>
                        <Link className="nav-link" to={"/Page2"}>Page2</Link>
                        <Link className="nav-link" to={"/Page3"}>Page3</Link>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Header