import React, { useContext } from "react";
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import stardull from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const {add_cart} = useContext(ShopContext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={stardull} alt="" /> 
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-roght-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-roght-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdiaply-right-description">
                    Elevate your wardrobe with our timeless T-shirts. Crafted from premium, breathable fabric, this piece blends classic style with modern comfort—perfect for both casual outings and sophisticated gatherings
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdiaplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{add_cart(product.id)}}>ADD TO CART</button>
                <p className="product-display-right-category">
                    <span>Category :</span> Women, T-shirt, Crop Top
                </p>
                <p className="product-display-right-category">
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
    )
}
export default ProductDisplay