import React from 'react'
import HeaderAdmin from './headerAdmin/headerAdmin'
import { Outlet } from 'react-router-dom'
const LayoutAdmin = () => {
    return (
        <div>
            <HeaderAdmin />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin