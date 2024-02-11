import React from 'react'
import './App.css'
import Home from './Home page/Home'
import Service from './Service page/Service'
import {Routes,Route} from 'react-router-dom'
export default function () {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
    </div>
  )
}
