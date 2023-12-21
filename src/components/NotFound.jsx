import React from 'react';
import Footer from './Footer';
import "../Styles/notfound.css";
import NotFoundImage from "../assets/notfound.png";
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <div className='not-found'>
                <div className="svg-container">
                    <img src={NotFoundImage} alt="" />
                </div>
                <div className="not-found-heading">
                    <h3>404- Page Not Found</h3>
                    <span className='py-6'>
                        The page you are looking for might have been removed 
                        or is temporarily unavailable
                    </span>
                    <Link to="/"> Go to Homepage</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
