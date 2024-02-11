import React from 'react'
import '../ServiceCss/Help-service.css'
export default function () {
  return (
    <div className='help_service'>
    <div className='container'>
    <h2 className='service_help_title'>I can help you in these particular areas.</h2> 
      <ul className='service_help_list'>
      <div class="service_extra_left">
       <li className='service_help_list_item service_extra_item'>
        <h3 className='service_help_item_title service_third_help'>Group Coaching Sessions</h3>
        <p className='service_help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua minim veniam.
        </p>
        </li>

        <li className='service_help_list_item'>
        <h3 className='service_help_item_title service_second_help'>Consultation</h3>
        <p className='service_help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua minim veniam.
        </p>
        </li>
      </div>

      <div class="service_extra_right">
        <li className='service_help_list_item service_extra_item'>
        <h3 className='service_help_item_title service_fourth_help'>Online course</h3>
        <p className='service_help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua minim veniam.
        </p>
        </li>
        <li className='service_help_list_item'>
        <h3 className='service_help_item_title service_first_help'>1:1 Coaching</h3>
        <p className='service_help_item_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua minim veniam.
        </p>
        </li>
      </div>
      </ul>
    </div>
    </div>
  )
}
