import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../components/home'


const AppRouters = () => {
    return (
        <Router>
            <Routes>
            <Route index element={<Home />} />

                <Route path='/*' element={<h1 className='d-flex justify-content-center  '>Not found,fuck you </h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouters