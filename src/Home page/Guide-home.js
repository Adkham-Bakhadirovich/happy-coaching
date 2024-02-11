import React from 'react'
import '../HomeCss/Guide-home.css'
import Guide from '../images/guide-img.png'
export default function () {
  return (
    <div className='guide'>
    <div className='container'>
    <div class="guide_box_wrapper">
      <div className='guide_box'>
        <h2 className='guide_title'>
          Don’t miss out on my ‘Live life at the full
          potential’ free guide
        </h2>
        <p className='guide_text'>
        <span className='guide_text_span'>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua minim veniam.
        </span><br/>
        <br/>
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <span className='guide_span'><a className='guide_span_link' href='#'>Get your free guide now</a></span>
      </div>
      <img className='guide_img' src={Guide}/>
    </div>
    </div>
    </div>
    )
  }
  