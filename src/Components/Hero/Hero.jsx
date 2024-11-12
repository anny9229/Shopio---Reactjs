import React from "react";
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import Arroe_icon from '../Assets/arrow.png'
import text_hero from '../Assets/hero_image.png'
const Hero = () => {
    return(
        <div className="hero"> 
            <div className="hero-left">
                <h2>Welcome To Shopio</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Get New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>
                         Latest Collections
                    </div>
                    <img src={Arroe_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={text_hero} alt="" />  
            </div>
        </div>
    )
}
export default Hero