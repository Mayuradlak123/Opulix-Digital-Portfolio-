import React from 'react'
import "../Styles/getintouch.css"
import Image from "../assets/privacy.png"
const  GetInTouch=()=> {
  return (
    <div className='get-in-touch'>
      <div className="get-image">
        <img src={Image} alt="" width='450' height='300' />
      </div>
      <div>
        <button>Get in touch</button>
      </div>
    </div>
  )
}

export default GetInTouch
