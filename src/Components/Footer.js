import React from 'react'
import '../ComponentsCss/Footer.css'
import Linkedn from '../images/linkedn.svg'
import Facebook from '../images/facebook.svg'
import Basketball from '../images/basketball.svg'
import Footer from '../images/site-logo.svg'
import Made from '../images/made.svg'
import { Link } from 'react-router-dom';
export default function () {
  return (
    <div className='footer'>
    <div className='container'>
    <div className='footer_top'>
    <div className='footer_left'>
    <a href="#"><img className='footer_logo' src={Footer}/></a>
    <p className='footer_left_text' hre>Design amazing digital experiences that create more happy 
    in the world.
    </p>
    </div>
    
    <ul className='footer_list footer_list_extra'>
    <strong className='footer_strong'>Pages</strong>
    <li className='footer_list_item first_item'><Link className='footer_list_link' to="/">Home</Link></li>
    <li className='footer_list_item'><Link className='footer_list_link' to="service">Services</Link></li>
    <li className='footer_list_item'><a className='footer_list_link' href='#'>About us</a></li>
    <li className='footer_list_item'><a className='footer_list_link' href='#'>Extra Sales/Landingpage</a></li>
    <li className='footer_list_item end_item_footer'><a className='footer_list_link' href='#'>Free guide</a></li>
    </ul>
    
    <ul className='footer_list'>
    <strong className='footer_strong'>Contact</strong>
    <li className='footer_list_item first_item'><a className='footer_list_link' href='#'>+123 456 789</a></li>
    <li className='footer_list_item'><a className='footer_list_link' href='#'>hello@happydigital.nl</a></li>
    <li className='footer_list_item'><a className='footer_list_link' href='#'>Instagram</a></li>
    <li className='footer_list_item end_item_footer'><a className='footer_list_link' href='#'>LinkedIn</a></li>
    </ul>
    </div>

    <div className='footer_bottom'>
      <img className='footer_bottom_made' src={Made}/>
      <ul className='footer_bottom_list'>
        <li className='footer_bottom_list_item'><a className='footer_bottom_list_link' href='#'><img className='footer_bottom_list_i' src={Linkedn}/></a></li>
        <li className='footer_bottom_list_item'><a className='footer_bottom_list_link' href='#'><img className='footer_bottom_list_i' src={Facebook}/></a></li>
        <li className='footer_bottom_list_item'><a className='footer_bottom_list_link' href='#'><img className='footer_bottom_list_i' src={Basketball}/></a></li>
      </ul>
    </div>
    </div>
    </div>
    )
  }
  