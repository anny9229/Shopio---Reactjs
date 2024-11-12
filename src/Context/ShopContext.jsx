import React, {useEffect, createContext, useState } from "react";
import all_product from'../Components/Assets/all_product'


export const ShopContext = createContext(null);

const getdefauultCart= () =>{
    let cart = {};
    for (let index =0;  index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartitem,setcartitem] = useState(() => {
        const savedCart = localStorage.getItem("cartitem");
        return savedCart ? JSON.parse(savedCart) : getdefauultCart();
    });

    useEffect(() => {
        localStorage.setItem("cartitem", JSON.stringify(cartitem));
    }, [cartitem]);
    
   
    // console.log(cartitem);
    const add_cart = (iid)=>{
        setcartitem((prev)=>({...prev,[iid]:prev[iid]+1}))
        console.log(cartitem);
    }
    const remove_cart = (iid)=>{
        setcartitem((prev)=>({...prev,[iid]:prev[iid]-1}))
    }

    const getTotalCartAmount = () => {
        let totalamount = 0; 
        for(const item in cartitem){
            if(cartitem[item] > 0){
                let itemInfo = all_product.find((product)=> product.id === Number(item));
                totalamount += itemInfo.new_price * cartitem[item];
            }
            
        }
        return totalamount
    }

    const getTotalIteamCart = () =>{
        let totalItem = 0; 
        for(const item in cartitem){
            if(cartitem[item] > 0){
                totalItem+=cartitem[item];
            }
        }
        return totalItem
    }
 
    
    const contextValue = {getTotalIteamCart,getTotalCartAmount,all_product,cartitem,add_cart,remove_cart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;