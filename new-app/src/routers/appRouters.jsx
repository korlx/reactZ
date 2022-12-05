import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../components/home'
import From from '../form/from'
import Form from '../form/form'

const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/signUp' element={<Form />} />
                    <Route path='/login' element={<From />} />

                </Route >
                <Route path='/*' element={<h1 className='d-flex justify-content-center  '>Not found,fuck you </h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouters