import React from "react";
import './Offer.css'
import exclusive from "../Assets/exclusive_image.png"
const Offers = () => {
    return(
        <div className="offers">
            <div className="offer-left">
                <h1>Excusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={exclusive} alt="" />
            </div>
        </div>
    )
}
export default Offers