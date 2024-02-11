import React from 'react'
import '../HomeCss/Article-home.css'
export default function () {
  return (
    <div className='article'>
    <div className='container'>
    <div className='article_box'>
      <div className='article_inner_box'>
        <h2 className='article_title'>Get notified when I publish new articles</h2>
        <p className='article_text'>Stay up to date with the latest news, announcements, and articles.</p>
      </div>

      <form className='article_form'>
        <input className='article_form_input' placeholder='Enter your email' type='email'/>
        <button className='article_form_button' type='submit'>Subscribe</button>
      </form>
    </div>
    </div>
    </div>
    )
  }
  