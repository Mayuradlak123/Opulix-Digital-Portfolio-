import React from 'react'
import Carousel from "react-elastic-carousel";
import Precious from "../assets/Precious/Precious04.jpg";
import "../Styles/home-slider.css"
import Header from "./Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    { width: 1200, itemsToShow: 2.7 },
  ];
  return (
    <>
    <div className='home-slider'>
    
    <Swiper
      className='custom-carousel'
      breakPoints={breakPoints}
      disableArrows={true}
      spaceBetween={0} // Adjust the spacing between slides as needed
      slidesPerView={2.8} // Display 2.5 images in one slide
      loop={true} // Enable loop for continuous autoplay
      autoplay={{ delay: 1000, disableOnInteraction: false }} // Adjust autoplay settings as needed
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div key={i} className='mx-3'>
            <img src={item} alt={`Slide ${i + 1}`} width="100%" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
    <div className="home-carousel">     
       <Header /> 
       </div>
    </>
  )
}

export default HomeSlider
