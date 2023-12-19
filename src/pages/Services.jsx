import React from 'react'
import Header from '../components/Header'
import GetInTouch from '../components/GetInTouch'
import Branding from "../assets/Services_Page_Laptop/Branding.png"
import App from "../assets/Services_Page_Laptop/App-D.png"
import Digital from "../assets/Services_Page_Laptop/DM.png"
import Website from "../assets/Services_Page_Laptop/Web-D.png"
import UI from "../assets/Services_Page_Laptop/UIUX.png"
import "../Styles/services.css"
const Services = () => {
  return (
    <div>
      <div className="service">
      <Header />
        <div className="service-title">
          <h3 className=''>Services</h3>
          <p>Check out our selection of our recent <br />
            projects and case studies</p>
        </div>
        <div className="service-item branding mt-8">
          <span className="py-3 "> Brand Identity</span>
          <img src={Branding} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in rem deleniti mollitia enim, suscipit laborum explicabo. Similique dicta, dolores ut molestias magnam atque beatae impedit. Enim deserunt quis id?</p>
        </div>
        <div className="service-item website">
          <span className="py-3 "> Website Development </span>
          <img src={Website} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in rem deleniti mollitia enim, suscipit laborum explicabo. Similique dicta, dolores ut molestias magnam atque beatae impedit. Enim deserunt quis id?</p>

        </div>
        <div className="service-item app" >
          <span className="py-3 "> App Development </span>
          <img src={App} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in rem deleniti mollitia enim, suscipit laborum explicabo. Similique dicta, dolores ut molestias magnam atque beatae impedit. Enim deserunt quis id?</p>

        </div>
        <div className="service-item ui-ux">
          <span className="py-3 ">UI/UX Design </span>
          <img src={UI} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in rem deleniti mollitia enim, suscipit laborum explicabo. Similique dicta, dolores ut molestias magnam atque beatae impedit. Enim deserunt quis id?</p>

        </div>
        <div className="service-item digital">
          <span className="py-3 ">Digital Marketing </span>
          <img src={Digital} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in rem deleniti mollitia enim, suscipit laborum explicabo. Similique dicta, dolores ut molestias magnam atque beatae impedit. Enim deserunt quis id?</p>

        </div>
      </div>
      <GetInTouch />
    </div>
  )
}

export default Services
