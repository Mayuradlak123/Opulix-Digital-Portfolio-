import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { useSwiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "../Styles/slider.css"
import Branding from "../assets/Service_Images/Brand.jpg"
import Digital from "../assets/Service_Images/Digital.jpg"
import App from "../assets/Service_Images/App.jpg"
import UI from "../assets/Service_Images/UIUX.jpg"
import Website from "../assets/Service_Images/Web.jpg"
const ServiceSlider = () => {

  // const items = ['Digital Marketing', 'Brand Identity', 'Website Development', 'UI/UX Design', 'App Development']
  const images = [Digital, Branding, Website, UI, App]
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const items = [
    {
      title: <h2>Digital Marketing</h2>,
      description: 'Description for Item 1',
      imageUrl: Digital,
    },
    {
      title: <h2>Brand Identity</h2>,
      description: 'Description for Item 2',
      imageUrl: Branding,
    },
    {
      title: <h2>Website Development</h2>,
      description: 'Description for Item 2',
      imageUrl: Website,
    },
    {
      title: <h2>UI/UX Design</h2>,
      description: 'Description for Item 2',
      imageUrl: UI,
    },
    {
      title: <h2>App Development</h2>,
      description: 'Description for Item 2',
      imageUrl: App,
    },
    // Add more items as needed
  ];
  const swiper =useSwiper();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
   
  };

  return (
    <>

      <div className="slider-container">
        <div className="carousel-container">
          <div className="content-container">
            <div className="desc-container py-3">
              <h2>{items[currentIndex].title}</h2>
              <p className='py-3'>{items[currentIndex].description}</p>
            </div>
            <div className="carousel-controls py-2">
              <button onClick={prevSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                  <path d="M25.0579 31.0137C25.1694 31.1252 25.2578 31.2576 25.3182 31.4033C25.3785 31.549 25.4096 31.7051 25.4096 31.8628C25.4096 32.0205 25.3785 32.1766 25.3182 32.3223C25.2578 32.468 25.1694 32.6004 25.0579 32.7119C24.9464 32.8234 24.814 32.9118 24.6683 32.9721C24.5226 33.0325 24.3665 33.0636 24.2088 33.0636C24.0511 33.0636 23.895 33.0325 23.7493 32.9721C23.6036 32.9118 23.4712 32.8234 23.3597 32.7119L11.3588 20.7109C11.2472 20.5995 11.1587 20.4671 11.0983 20.3214C11.0379 20.1757 11.0068 20.0196 11.0068 19.8619C11.0068 19.7041 11.0379 19.548 11.0983 19.4023C11.1587 19.2566 11.2472 19.1242 11.3588 19.0128L23.3597 7.01185C23.5849 6.78666 23.8903 6.66016 24.2088 6.66016C24.5273 6.66016 24.8327 6.78666 25.0579 7.01185C25.2831 7.23704 25.4096 7.54246 25.4096 7.86092C25.4096 8.17938 25.2831 8.4848 25.0579 8.70998L13.9045 19.8619L25.0579 31.0137Z" fill="#C8C8C8" />
                </svg>
              </button>
              <button onClick={nextSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M36.581 27.3281L20.7616 43.1475C20.6146 43.2945 20.4401 43.4111 20.2481 43.4906C20.0561 43.5702 19.8503 43.6111 19.6424 43.6111C19.4345 43.6111 19.2287 43.5702 19.0367 43.4906C18.8446 43.4111 18.6701 43.2945 18.5232 43.1475C18.3762 43.0005 18.2596 42.8261 18.1801 42.634C18.1005 42.442 18.0596 42.2362 18.0596 42.0283C18.0596 41.8204 18.1005 41.6146 18.1801 41.4226C18.2596 41.2305 18.3762 41.056 18.5232 40.9091L33.2253 26.2089L18.5232 11.5087C18.2263 11.2118 18.0596 10.8093 18.0596 10.3895C18.0596 9.96967 18.2263 9.56707 18.5232 9.27024C18.82 8.9734 19.2226 8.80664 19.6424 8.80664C20.0622 8.80664 20.4648 8.9734 20.7616 9.27024L36.581 25.0897C36.7281 25.2366 36.8448 25.411 36.9244 25.6031C37.004 25.7951 37.045 26.001 37.045 26.2089C37.045 26.4168 37.004 26.6226 36.9244 26.8147C36.8448 27.0067 36.7281 27.1812 36.581 27.3281Z" fill="#DCC132" />
                </svg>
              </button>
            </div>
          </div>
          <div className="slide-image-container">
            <Swiper
            
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
 spaceBetween={5}
            coverflowEffect={{
              stretch: 0,
              depth: 50,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
        
             
            >
              {images.map((e)=>{
                return (
              <SwiperSlide key={e}>
                <img src={e}  />
              </SwiperSlide>
                )
             })}

            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSlider
