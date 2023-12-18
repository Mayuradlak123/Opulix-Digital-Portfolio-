import React from 'react'
import Carousel from "react-elastic-carousel";
import Precious from "../assets/Precious/Precious04.jpg";
import "../Styles/home-slider.css"
import Header from "./Header"
import Image1 from "../assets/home/img1.png";
import Image2 from "../assets/home/img2.png";
import Image3 from "../assets/home/img3.png";
import Image4 from "../assets/home/main.png";
const HomeSlider = () => {
  const items = [Precious,Image4, Image1, Image2, Image3];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 2.5 },
  ];
  return (
    <>
    <div className='home-slider'>
    
      <Carousel
        className='custom-carousel'
        breakPoints={breakPoints}

     
        disableArrows={true}

      >

        {items.map((item, i) => (
          <div key={i} className='mx-3 '>
            <img src={item} className='' width="100%" />
          </div>
        ))}
      </Carousel>

    </div>
    <div className="home-carousel">     
       <Header /> 
       </div>
    </>
  )
}

export default HomeSlider
