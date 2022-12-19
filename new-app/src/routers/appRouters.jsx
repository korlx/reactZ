import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeAdmin from '../components/admin/homeAdmin';
import Form from '../components/form/form';
import Login from '../components/form/login';
import Home from '../components/home';
import LayoutAdmin from '../layout/layoutAdmin/layoutAdmin';
import Layout from '../layout/layoutUser/layout';
const AppRouters = () => {

  return (
    <Router>
      <Routes>
    {/* User Layout */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signUp' element={<Form />} />
          <Route path='/login' element={<Login />} />
        </Route>

    {/* Admin Layout */}
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='/admin' element={<HomeAdmin />} />
        </Route>


{/* Not Found */}
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>


    </Router>
  )
}

export default AppRouters