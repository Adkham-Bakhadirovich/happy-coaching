import React from 'react'
import '../ComponentsCss/Header.css'
import logo from "../images/site-logo.svg"
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className='header'>
      <div className='container'>
       <div className='header_box'>
         <img className='site_logo' src={logo}/>
         <nav className='navbar'>
          <ul className='navbar_list'>
            <li className='navbar_list_item'><Link to="home" className='navbar_list_link'>Home</Link></li>
            <li className='navbar_list_item'><Link to="service" className='navbar_list_link'>Services</Link></li>
            <li className='navbar_list_item mobile'><Link to="about" className='navbar_list_link'>About us</Link></li>
            <li className='navbar_list_item mobile'><Link to="sales" className='navbar_list_link'>Extra Salespage</Link></li>
            <li className='navbar_list_item end_item mobile'><Link to="guide" className='navbar_list_link end_link'>Get your free guide now</Link></li>
          </ul>

          
         </nav>
       </div>
      </div>
    </div>
  )
}
