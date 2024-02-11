import React from 'react'
import '../ServiceCss/Transform-service.css'
import Transform from '../images/transform-img.png'
export default function () {
  return (
    <div className='transform'>
    <div className='container'>
    <p className='transform_desc '>How does it work?</p>
    <h2 className='transform_title'>Are you ready to transform your life?</h2>
    <p className='transform_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
    <div className='transform_box'>
      <ul className='transform_list'>
        <li className='transform-list_item first_trans'>
          <span>
            <h4 className='transform_item_title'>Talk to me first</h4>
            <p className='transform_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </span>
        </li>

        <li className='transform-list_item second_trans'>
          <span>
            <h4 className='transform_item_title'>Schedule a meeting</h4>
            <p className='transform_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </span>
        </li>

        <li className='transform-list_item third_trans'>
          <span>
            <h4 className='transform_item_title'>Online consultation</h4>
            <p className='transform_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </span>
        </li>

        <li className='transform-list_item fourth_trans'>
          <span>
            <h4 className='transform_item_title'>Ready to start? Let’s talk!</h4>
            <p className='transform_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </span>
        </li>
      </ul>
      <img className='transform_img' src={Transform}/>
    </div>
    </div>
    </div>
    )
  }
  