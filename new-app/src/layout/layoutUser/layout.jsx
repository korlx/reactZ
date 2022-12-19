import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderUser from './headerUser/headerUser'



const Layout = () => {
  return (
    <div>
        < HeaderUser/>
        <Outlet/>
        
    </div>
  )
}

export default Layout