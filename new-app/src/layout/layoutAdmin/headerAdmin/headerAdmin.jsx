import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to={"/Admin"}>Admin Home Page</Link>
                        <Link className="nav-link" to={"/Page1"}>Page1Admin</Link>
                        <Link className="nav-link" to={"/Page2"}>Page2Admin</Link>
                        <Link className="nav-link" to={"/Page3"}>Page3Admin</Link>
                    </div>
                </div>
            </div>
        </nav>)
}

export default HeaderAdmin