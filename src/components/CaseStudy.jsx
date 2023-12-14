import React from 'react'
import HeaderImage from "../assets/Precious/Precious03.jpg"
import PreciousImage from "../assets/Precious/Precious07.jpg"
import PreciousImage2 from "../assets/Precious/Precious08.jpg"
import "../Styles/case-study.css"
import Header from './Header'
import Footer from './Footer'
const CaseStudy = () => {
    return (
        <div className='case-study '>
            <div className="case-study-header">

                <div className='case-study-image'>

                    <Header />

                </div>
                <div className="case-study-body">
                    <div className='case-text-container'>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt iusto ipsum tempora sit molestiae, suscipit, dolorum maiores expedita, officia asperiores. Amet obcaecati explicabo natus!
                        </h3>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae mollitia neque asperiores pariatur est beatae nisi vitae obcaecati. Deleniti optio dicta laboriosam ab rem enim voluptate deserunt! Odio, laudantium?
                        </span>
                    </div>
                    <div className="case-study-container">
                        <div className="case-study-item">
                            <img src={PreciousImage} alt="" />
                            <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique eligendi sint vel accusantium consectetur officiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nobis quibusdam, ab quam sint earum inventore possimus. Nostrum, ex est?</span>
                            <span>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nihil temporibus dolores, suscipit sequi nobis. adipisicing elit. Doloremque nobis quibusdam, ab quam sint earum inventore possimus. Nostrum, ex est?</span>
                        </div>
                    </div>
                    <div className="case-study-item2">
                        <img src={PreciousImage2} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CaseStudy
