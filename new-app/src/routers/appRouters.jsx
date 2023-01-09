import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Infocard from '../components/Infocard'
import Main from '../components/Main'
import Layout from '../layout/layout'

const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Main />}/>
                <Route path='/movieinfo/:id' element={<Infocard />} />

                </Route>
                <Route path='/*' element={<h1 className='d-flex justify-content-center  '>Not found,fuck you </h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouters