import React from 'react'
import '../ServiceCss/Know-service.css'
export default function () {
  return (
    <div className='know'>
    <div className='container'>
    <h2 className='know_title'>Good to know.</h2>
    <p className='know_text'>Everything you need to know about the my services.</p>
    <ul className='know_list'>
      <li className='know_list_item'>
        <h3 className='know_item_title know_extra_title'>How long does the coaching process take?</h3>
        <p className='know_item_text'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
      </li>

      <li className='know_list_item'>
        <h3 className='know_item_title'>What if I wanted to end my coaching engagement?</h3>
      </li>

      <li className='know_list_item'>
        <h3 className='know_item_title'>Can I change through coaching?</h3>
      </li>

      <li className='know_list_item fourth_know'>
        <h3 className='know_item_title'>How often do we meet?</h3>
      </li>
    </ul>
    </div>
    </div>
    )
  }
  