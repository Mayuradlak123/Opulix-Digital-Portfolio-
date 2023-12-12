import React from 'react';
import Header from '../components/Header';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import "../Styles/about-us.css"
const AboutUs = () => {

  return (
    <div className='about'>
      <Header />
      <div className="about-us">
        <h3>Welcome to Opulix Digital</h3>
        <div className='about-title'>where innovation meets excellence!</div>
        <div className="about-text">
          <span>Opulix Digital is a leading digital services provider, driven by a vision to revolutionize the digital landscape through unparalleled creativity, technology, and innovation. Founded on principles of integrity and collaboration, we specialize in Web Services, including Design and Development, Application and Software Design, Branding, and Digital Marketing. </span>
          <span> Our dynamic team of dedicated professionals fosters a collaborative environment where creativity thrives, and innovation is inherent. What sets us apart is not just our services but our client-centric approach, exceeding expectations and building lasting relationships.`</span>
          <span> At Opulix Digital, success goes beyond project delivery; it's about guiding businesses through the digital landscape with strategic insights and technical expertise. Our values extend to creating a positive and inclusive work environment, investing in the growth and development of our team. </span>
          <span> Committed to pushing boundaries and embracing challenges, Opulix Digital continues to redefine digital excellence, one project at a time. Join us on this exciting journey where innovation knows no bounds!</span>

        </div>
      </div>
      <ServiceSlider />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default AboutUs
