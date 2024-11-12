import React, { useState,useEffect, useContext } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {
    const [menu,setmenu] = useState("shope");
    const [scrolled, setScrolled] = useState(false);
    const {getTotalIteamCart} = useContext(ShopContext)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Sho<span>pio</span></p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setmenu("shop")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/">Shop</Link>{menu==="shop" ? <hr/> :<></>}</li>
                <li onClick={() => {setmenu("mens")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/mens">Men</Link>{menu==="mens" ? <hr/> :<></>}</li>
                <li onClick={() => {setmenu("womens")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/womens">Women</Link>{menu==="womens" ? <hr/> :<></>}</li> 
                <li onClick={() => {setmenu("kids")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/kids">Kid</Link>{menu==="kids" ? <hr/> :<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    {getTotalIteamCart()}
                </div>
            </div>
        </div>
    )
}

export default Navbar