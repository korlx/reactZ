import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottom from './bottom/bottom'
import Header from './header/header'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Bottom/>
    </div>
  )
}

export default Layout