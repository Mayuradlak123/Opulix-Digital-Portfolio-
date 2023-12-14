import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Group from "../assets/Group.png"
import "../Styles/header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    const [isExplored, setIsExplored] = useState(false)
    return (
        <div className='header'>
            <div className='header-item'>
                {!isExplored ?
                    <>
                        <div className={`explore `}>
                            <button className="" onClick={() => setIsExplored(true)}>Explore </button>
                        </div>

                        <div className="group-image">
                            <img src={Group} alt="" />
                        </div>
                    </> :
                    <div className={`explore-menu-container ${isExplored ? 'explored' : ""}`}>
                        <div className="explore-item">
                            <Link to="/about-us" className="">About </Link>
                        </div>
                        <div className="explore-item">
                            <Link to="/works" className="">Work </Link>
                        </div>
                        <div className="explore-item">
                            <Link to="/services" className="">Service </Link>
                        </div>
                        <div className="explore-item">
                            <button onClick={() => setIsExplored(false)}> <IoMdClose /> </button>
                        </div>
                    </div>
                }
                <div className="contact">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header
