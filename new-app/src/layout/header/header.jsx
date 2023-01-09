import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <Search/>
        </nav>
        </div>
    )
}

export default Header