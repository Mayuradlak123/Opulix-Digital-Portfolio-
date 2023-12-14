import React from 'react'
import Footer from '../components/Footer'
import "../Styles/contact-us.css"
const ContactUs = () => {
  return (
    <div>
      <div className="contact-us">
        <div className="close-btn">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
              <circle cx="36.2059" cy="36.5609" r="36.0028" fill="#DCC132" />
              <path d="M47.8546 46.513C47.9661 46.6245 48.0546 46.7568 48.1149 46.9025C48.1753 47.0482 48.2063 47.2043 48.2063 47.362C48.2063 47.5197 48.1753 47.6758 48.1149 47.8215C48.0546 47.9672 47.9661 48.0996 47.8546 48.2111C47.7431 48.3226 47.6108 48.411 47.4651 48.4714C47.3194 48.5317 47.1633 48.5628 47.0056 48.5628C46.8479 48.5628 46.6917 48.5317 46.5461 48.4714C46.4004 48.411 46.268 48.3226 46.1565 48.2111L36.2047 38.2578L26.253 48.2111C26.0278 48.4363 25.7223 48.5628 25.4039 48.5628C25.0854 48.5628 24.78 48.4363 24.5548 48.2111C24.3296 47.9859 24.2031 47.6805 24.2031 47.362C24.2031 47.0436 24.3296 46.7381 24.5548 46.513L34.5081 36.5612L24.5548 26.6094C24.3296 26.3842 24.2031 26.0788 24.2031 25.7603C24.2031 25.4419 24.3296 25.1365 24.5548 24.9113C24.78 24.6861 25.0854 24.5596 25.4039 24.5596C25.7223 24.5596 26.0278 24.6861 26.253 24.9113L36.2047 34.8645L46.1565 24.9113C46.3817 24.6861 46.6871 24.5596 47.0056 24.5596C47.324 24.5596 47.6295 24.6861 47.8546 24.9113C48.0798 25.1365 48.2063 25.4419 48.2063 25.7603C48.2063 26.0788 48.0798 26.3842 47.8546 26.6094L37.9014 36.5612L47.8546 46.513Z" fill="#121212" />
            </svg>
          </button>
          <div className="contact-container">
            <div className="contact-info-left">
              <h3>Like what you see</h3>
              <h4>Get in touch with us.</h4>
              <div className="brand-name">
                <label htmlFor="">BRAND NAME</label>
                <input type="text" placeholder='Your company name here' />
              </div>
              <div className="service-details">
                <label htmlFor="">SERVICE DETAILS</label>
                <textarea type="text" placeholder='we want to.' />
              </div>
            </div>
            <div className="contact-info-right">
              <div className="contact-service">
                <label htmlFor="" className='py-4'>
                  SERVICES REQUIRED
                </label>
                <div className="required-service">
                  <div className='required-service-item1'>Digital Marketing</div>
                  <div className='required-service-item2'>Branding</div>
                  <div className='required-service-item3'>Web Design</div>
                  <div className='required-service-item4'>App Design </div>
                  <div className='required-service-item5'>Development</div>
                  <div className='required-service-item6'>Other </div>
                  <div className='required-service-item7'>Software Development</div>
                </div>
              </div>
              <div className="contact-email">
                <label htmlFor="">EMAIL ADDRESS</label>
                <input type="email" placeholder='your email here' />
              </div>
              <div className="contact-number">
                <label htmlFor="">PHONE NUMBER (WITH COUNTRY CODE)</label>
                <div className="contact-code-number">
                  <input type="text" placeholder='code' className='contact-code' />
                  <input type="text" placeholder='Your number here' className='contact-phone' /> </div>
              </div>
              <div className="contact-submit">
            <button>Submit Request</button>
            <span>
            At Opulix Digital, every project is a masterpiece, meticulously crafted to resonate excellence, innovation, and impact. Join us at Opulix Digital, and step into a realm where technology, creativity, and strategy converge, ensuring a digital presence that is not just felt but is unforgettable.
            </span>
            <span>  Your journey to digital distinction begins here!</span>
          </div>
            </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
