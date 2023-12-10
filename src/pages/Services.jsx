import React from 'react'
import Header from '../components/Header'
import GetInTouch from '../components/GetInTouch'
import Branding from "../assets/service/branding.png"
import App from "../assets/service/App.png"
import Digital from "../assets/service/Digital.png"
import Website from "../assets/service/Website.png"
import UI from "../assets/service/UI.png"
import "../Styles/services.css"
const Services = () => {
  return (
    <div>
      <Header />
      <div className="service">
        <div className="service-title">
          <h3 className=''>Services</h3>
          <p>Check out our selection of our recent <br />
            projects and case studies</p>
        </div>
        <div className="service-item">
          <span> Brand Identity</span>
          <img src={Branding} alt="" />
        </div>
        <div className="service-item">
          <span> Website Development </span>
          <img src={Website} alt="" />
        </div>
        <div className="service-item">
          <span> App Development </span>
          <img src={App} alt="" />
        </div>
        <div className="service-item">
          <span>UI/UX Design </span>
          <img src={UI} alt="" />
        </div>
        <div className="service-item">
          <span>Digital Marketing </span>
          <img src={Digital} alt="" />
        </div>
      </div>
      <GetInTouch />
    </div>
  )
}

export default Services
