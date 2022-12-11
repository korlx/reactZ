import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../components/home'
import Page2 from '../Pages/Page2'
import Page1 from '../Pages/Page1'
import Page3 from '../Pages/Page3'

const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/Page1' element={<Page1 />} />
                    <Route path='/Page2' element={<Page2 />} />
                    <Route path='/Page3' element={<Page3 />} />

                </Route >
                <Route path='/*' element={<h1 className='d-flex justify-content-center  '>Not found,fuck you </h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouters