import React from "react";
import "./Footer.css"
import foot_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pintest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={foot_logo} alt="" />
                <p>Sho<span>pio</span></p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Officies</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintest} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved - By Aniket Sanchaniya.</p>
            </div>
        </div>
    )
}
export default Footer