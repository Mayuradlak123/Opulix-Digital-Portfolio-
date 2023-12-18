import React from 'react'
import Header from '../components/Header'
import HotelImage from "../assets/Work_Images_laptop_mockups/PAhotels.png"
import BrandingImage from "../assets/Work_Images_laptop_mockups/Brandings.png"
import InteriorImage from "../assets/Work_Images_laptop_mockups/Sk.png"
import PreciousImage from "../assets/Work_Images_laptop_mockups/Precious.png"
import "../Styles/work.css"
import { FaArrowRight } from "react-icons/fa6";
import GetInTouch from '../components/GetInTouch'
import { Link } from 'react-router-dom'
const Work = () => {
  return (
    <div className='our-work'>
      <Header />
      <div className="work-item">
        <div className="work-title">
          <h3 className=''>Work</h3>
          <span>Check out our selection of our recent <br />
            projects and case studies</span>
        </div>
       
      </div>
      <div className="product-items">
        <div className="product precious">
          <span>Precious Skincare</span>
          <img src={PreciousImage} alt="" />
          <div className='flex justify-center align-items-center anchor'> <Link className=''>View Case Study</Link>&nbsp; &nbsp;<Link> <FaArrowRight/> </Link> </div>
  </div>
        <div className="product pa-hotel">
          <span>PA Group Of Hotel</span>
          <img src={HotelImage} alt="" />
          <div className='flex justify-center align-items-center anchor'> <Link className=''>View Case Study</Link>&nbsp; &nbsp; <Link> <FaArrowRight/> </Link> </div>
 </div>
        <div className="product branding">
          <span>JH Branding </span>
          <img src={BrandingImage} alt="" />
          <div className='flex justify-center align-items-center anchor'> <Link className=''>View Case Study</Link>&nbsp;  &nbsp; <Link> <FaArrowRight/> </Link> </div>
  </div>
        <div className="product sk-iterior">
          <span>SK Iteriors</span>
          <img src={InteriorImage} alt="" />
         <div className='flex justify-center align-items-center anchor'> <Link className=''>View Case Study</Link> &nbsp; &nbsp; <Link> <FaArrowRight/> </Link> </div>
        </div>
        </div>
      <GetInTouch/>
    </div>
  )
}

export default Work
