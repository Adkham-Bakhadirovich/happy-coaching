import React from 'react'
import '../HomeCss/Help-home.css'
export default function () {
  return (
    <div className='help'>
    <div className='container'>
    <div className='help_top'>
    <h2 className='help_title'>I can help you in these particular areas.</h2>
    <p className='help_text'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua minim veniam.<br/>
    <br/> Sed ut perspiciatis unde omnis iste 
    natus error sit voluptatem accusantium doloremque laudantium, 
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
    et quasi architecto beatae vitae dicta sunt explicabo. 
    </p>
    </div>
    
      <ul className='help_list'>
      <li className='help_list_item'>
      <h3 className='help_item_title first_help'>1:1 Coaching</h3>
      <p className='help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua minim veniam.
      </p>
      </li>
      
      <li className='help_list_item'>
      <h3 className='help_item_title second_help'>Consultation</h3>
      <p className='help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua minim veniam.
      </p>
      </li>
      
      <li className='help_list_item media_extra'>
      <h3 className='help_item_title third_help'>Group Coaching Sessions</h3>
      <p className='help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua minim veniam.
      </p>
      </li>
      </ul>
    </div>
    </div>
    )
  }
  