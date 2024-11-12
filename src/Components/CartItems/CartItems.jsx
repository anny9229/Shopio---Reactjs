import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartitem,remove_cart} = useContext(ShopContext)
    return(
        <div className="cartitems">
                <h1>Product Detail</h1>
                <div className="cartitem-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e)=>{
                    if(cartitem[e.id] > 0){
                        return <div>
                                    <div className="cartitems-format cartitem-format-main">
                                        <img className="carticon-product-icon" src={e.image} alt="" />
                                        <p>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className="productitem-quantity">{cartitem[e.id]}</button>
                                        <p>${e.new_price*cartitem[e.id]}</p>
                                        <img className="cartitems-remove-icon" src={remove_icon} alt="" onClick={()=>{remove_cart(e.id)}}/>
                                    </div>
                                    <hr />
                                </div> 
                    }
                    return null
                })} 
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Total</h1>
                        <div>
                            <div className="cartitems-totalitem">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-totalitem">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-totalitem">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <button>CHECKOUT</button>
                        </div>
                        
                    </div>
                    <div className="cartitems-prpmpocode">
                            <p>IF YOU HAVE A PROMO CODE ENTER IT HERE</p>
                            <div className="cartitem-promobox">
                                <input type="text" name="" id="" placeholder="Promo Code"/>
                                <button>Submit</button>
                            </div>
                        </div>
                </div>
        </div>
    )
}
export default CartItems 