import React from 'react'
import Carousel from "react-elastic-carousel";
import Branding from "../assets/service/branding.png"
import App from "../assets/service/App.png"
import Digital from "../assets/service/Digital.png"
import Website from "../assets/service/Website.png"
import UI from "../assets/service/UI.png"
import "../Styles/slider.css"
const ServiceSlider = () => {
  const items = ['Digital Marketing', 'Brand Identity', 'Website Development', 'UI/UX Design', 'App Development']
  const images = [Digital, Branding, Website, UI, App]
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (

    <div className='carousel-container'>
      <div className="carousel-text">

      </div>
      <div className="carousel-image">
        <Carousel breakPoints={breakPoints}>
          {images.map((image, i) => (
            <div key={i} className='items'>
              <img src={image}  alt="" />
              <h3>{items[i]}</h3>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ServiceSlider
