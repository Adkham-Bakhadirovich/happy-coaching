import React from 'react'
import '../HomeCss/Blog-home.css'
import Balance from '../images/balanc.png'
import Media from '../images/media.png'
import Every from '../images/everyday.png'
export default function () {
  return (
    <div className='blog'>
    <div className='container'>
    <h1 className='blog_title'>Stay Motivated, read the weekly blog articles.</h1>
    <div className='blog_list'>
    <div class="blog_wrapper">
    <img className='blog_item_img' src={Balance}/>
    <div className='blog_list_item'>
    <h3 className='blog_item_title'>Balancing your love and work life.</h3>
    <p className='blog_item_text'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua minim veniam.
    </p>
    </div>
    </div>
    
    <div class="blog_wrapper">
    <img className='blog_item_img' src={Media}/>
    <div className='blog_list_item'>
    <h3 className='blog_item_title'>A short break from Social Media is important.</h3>
    <p className='blog_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua minim veniam.
    </p>
    </div>
    </div>
    
    <div class="blog_wrapper">
    <img className='blog_item_img' src={Every}/>
    <div className='blog_list_item'>
    <h3 className='blog_item_title'>How to be 1% Better Every Day</h3>
    <p className='blog_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua minim veniam.
    </p>
    </div>
    </div>
    </div> 
    <div class="blog_link_wrapper"><a className='blog_link' href='#'>Read more blogs</a></div>
    </div>
    </div>
    )
  }
  