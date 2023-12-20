import * as React from "react";

import ImagePlace from "../assets/ImagePlace.png"
import ImagePlaceHolder from "../assets/ImagePlaceHolder.png"
import JHImage from "../assets/JHImage.png"
import ServiceSlider from "../components/ServiceSlider";
import Footer from "../components/Footer";
import "../Styles/home.css"
import GetInTouch from "../components/GetInTouch";
import HomeSlider from "../components/HomeSlider";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <HomeSlider />
        {/* <div className="image-container">
        <div className="images"><img src={Image1} alt="" /></div>
        <div className="images"><img src={Image2} alt="" /></div>
        <div className="images"><img src={Image3} alt="" /></div>
      </div> */}
        <div className="home-text">
          <div className="home-qoute">


            <div>  Weaving &nbsp; <h4> Technology, </h4> </div>
            <div> <h4> Creativity,</h4>  &nbsp;and  &nbsp;<h4> Strategy,</h4> <br /> </div>
            <div> for Your Brand's Masterpiece </div>
          </div>
        </div>
        <div className="services-container">
          <div className="home-services ">
            <h3>Our Services.</h3>
              <span>A strategic and tactical approach is essential for long-term goals, but what is even more important is keeping deadlines and promises.</span>
          </div>
        </div>
        <ServiceSlider />
        <div className="works">
          <div className="work-text p-4 flex flex-column ">
           
            <div className=" flex justify-between  ">  <h3> Our Work.</h3> <span>Opulix Digital has grown into a global agency, partnering with luxury brands  across the world since its inception</span>
               </div>
               <Link to="/our-work" className="text-white">View More</Link>
          </div>
          <div className="work-cards">
            <div className="work-card px-3">
              <img src={JHImage} alt="" />
              <div className="card-text py-4 px-2"> <p>2023</p> <p>India</p> </div>
              <h5 className="py-2">JH Branding.</h5>
            </div>
            <div className="work-card px-3">
              <img src={ImagePlace} alt="" />
              <div className="card-text py-4 px-2"> <p>2023</p> <p>India</p> </div>

              <h5 className="py-2">Majestic Mercy</h5>
            </div>
            <div className="work-card px-3">
              <img src={ImagePlaceHolder} alt="" />
              <div className="card-text py-4 px-2"> <p>2023</p> <p>India</p> </div>

              <h5 className="py-2">Precious</h5>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="">
            <p>We at Opulix Digital ensure a digital presence that is not just felt but is <br /> unforgettable. Your journey to digital distinction begins here.</p>
            <div className="btn py-4">
              <button className="black-btn mx-2">Learn More</button>
              <button className="white-btn mx-2"> Book a Discovery Call</button>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
}


export default Home;