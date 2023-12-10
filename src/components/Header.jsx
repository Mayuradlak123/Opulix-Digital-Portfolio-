import React from 'react'
import Group from "../assets/Group.png"
import "../Styles/header.css"
const Header = () => {
    return (
        <div className='header'>
            <div className='header-item'>
                <div className="explore">
                    <button className="">Explore </button>
                </div>
                <div className="group-image">
                    <img src={Group} alt=""  />
                </div>
                <div className="contact">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header
