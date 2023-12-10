import React from 'react'
import Header from '../components/Header'
import HotelImage from "../assets/work/Hotel.png"
import BrandingImage from "../assets/work/Branding.png"
import InteriorImage from "../assets/work/Interior.png"
import PreciousImage from "../assets/work/Precious.png"
import "../Styles/work.css"
import GetInTouch from '../components/GetInTouch'
const Work = () => {
  return (
    <div className='our-work'>
      <Header />
      <div className="work-item">
        <div className="work-title">
          <h3 className=''>Work</h3>
          <p>Check out our selection of our recent <br />
            projects and case studies</p>
        </div>
        <div className="product">
          <span>Precious Skincare</span>
          <img src={PreciousImage} alt="" />
        </div>
        <div className="product">
          <span>PA Group Of Hotel</span>
          <img src={HotelImage} alt="" />
        </div>
        <div className="product">
          <span>JH Branding </span>
          <img src={BrandingImage} alt="" />
        </div>
        <div className="product">
          <span>SK Iteriors</span>
          <img src={InteriorImage} alt="" />
        </div>
      </div>
      <GetInTouch/>
    </div>
  )
}

export default Work
