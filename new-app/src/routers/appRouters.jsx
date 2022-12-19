import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Form from '../components/form/form';
import Login from '../components/form/login';

import Layout from '../layout/layoutUser/layout';

import Home from '../components/home'
import LayoutAdmin from '../layout/layoutAdmin/layoutAdmin';
// import HomeAdmin from '../components/homeAdmin';


const AppRouters = () => {

  return (
    <Router>
        <Routes>

                
         


          <Route path='/' element={<Layout/>}>

          <Route path='/:searchImg' element={<Home />} />


                <Route path='/signUp' element={<Form/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
          </Route>
               

        <Route path='/admin' element={<LayoutAdmin/>}>
              {/* <Route path='/homeAdmin' element={<HomeAdmin/>}/> */}
        </Route>


          <Route path='/*' element={<h1>Not found 404</h1>} />



         
        </Routes>
    </Router>
  )
}

export default AppRouters