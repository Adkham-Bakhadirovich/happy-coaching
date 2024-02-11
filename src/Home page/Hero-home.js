import React from 'react'
import '../HomeCss/Hero-home.css'
import Hero from '../images/hero-img.png'
export default function () {
  return (
      <div className='hero'>
      <div className='container'>
      <div className='hero_box'>
      <div class="hero_left_box">
      <p className='hero_desc'>Proven strategies backed by science for success.</p>
      <h1 className='hero_title'>Live life at the full potential</h1>
      <div class="hero_text_wrapper">
        <p className='hero_text'>
        I help people to discover their true potential
        and live a fulfilling life...Discover the simple 3 steps that
        I discovered to hack productivity. It just works and it is
        begin using backed by science. Wanna transform your life?
        </p>
      </div>
      <span class="hero_span"><a className='hero_link' href='#'>Get your free guide now</a></span>
      </div>
      <img className='hero_img' src={Hero}/>
      </div>
      </div>
      </div>
    )
  }
  