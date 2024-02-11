import React from 'react'
import '../ServiceCss/Hero-service.css'
import ServiceHero from '../images/service-hero-img.png'
export default function () {
  return (
    <div className='service_hero'>
    <div className='container'>
    <div className='service_hero_box'>
    <div class="service_hero_left_box">
    <p className='service_hero_desc'>I can help you in these patricular areas.</p>
    <h1 className='service_hero_title'>I help people to discover their true potential</h1>
    <p className='service_hero_text'>
    I help people to discover their true potential and live a fulfilling life...
    Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
    </p>
    </div>
    <img className='service_hero_img' src={ServiceHero}/>
    </div>
    </div>
    </div>
  )
}
