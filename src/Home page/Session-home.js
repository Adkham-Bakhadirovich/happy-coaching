import React from 'react'
import '../HomeCss/Session-home.css'
import Session from '../images/session_img.png'
export default function () {
  return (
    <div className='session'>
    <div className='container'>
    <div className='session_box'>
    <div className='session_inner_box'>
    <h2 className='session_title'>Get 15-Minutes Complimentary online session.</h2>
    <p className='session_text'>Limited Period Offer. Claim Now.</p>
    <span className='session_span'><a className='session_span_link' href='#'>Book now</a></span>
    </div>
    <img className='session_img' src={Session}/>
    </div>
    </div>
    </div>
    )
  }
  