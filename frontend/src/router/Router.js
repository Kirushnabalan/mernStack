import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tour from '../pages/Tour'
import Login from '../pages/Login'
import Tourdetails from '../pages/Tourdetails'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/tour/:id' element={<Tourdetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/tour/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Router
