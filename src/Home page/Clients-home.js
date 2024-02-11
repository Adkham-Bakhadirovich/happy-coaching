import React from 'react'
import '../HomeCss/Clients-home.css'
import Jane from '../images/jane-user.svg'
import Catherine from '../images/catherine.svg'
import Jan from '../images/next-jane.svg'
import Five from '../images/five-stars.svg'
import Free from '../images/free-stars.svg'
export default function () {
  return (
    <div className='clients'>
    <div className='container'>
    <h2 className='clients_title'>
    Hear out what my clients 
    say about me.
    </h2>
    <ul className='clients_list'>
    <li className='clients_list_item'>
    <p className='clients_list_text'>
    "I gained so much confidence 
    in my ability to connect and deepen my relationships with people. "
    </p>
    <strong className='clients_list_strong'>Jane</strong>
    <img className='clients_user_img' src={Jane}/>
    <img className='clients_star_img' src={Five}/>
    </li>

    <li className='clients_list_item'>
    <p className='clients_list_text'>
    "I gained so much confidence 
    in my ability to connect and deepen my relationships with people."
    </p>
    <strong className='clients_list_strong'>Catherine</strong>
    <img className='clients_user_img' src={Catherine}/>
    <img className='clients_star_img' src={Free}/>
    </li>

    <li className='clients_list_item'>
    <p className='clients_list_text'>
    "I gained so much confidence 
    in my ability to connect and deepen my relationships with
    people. "
    </p>
    <strong className='clients_list_strong'>Jane</strong>
    <img className='clients_user_img' src={Jan}/>
    <img className='clients_star_img' src={Free}/>
    </li>
    </ul>
    </div>
    </div>
    )
  }
  