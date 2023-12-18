import React from 'react'
import Carousel from "react-elastic-carousel";
import Precious from "../assets/Precious/Precious04.jpg";
import "../Styles/home-slider.css"
import Header from "./Header"
const HomeSlider = () => {
  const items = [Precious, Precious, Precious, Precious, Precious];

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

        autoPlaySpeed={100}
        enableAutoPlay={true}
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
