import React, { createContext, useState } from 'react'
import all_product from '../Images/all_product';
export const AppContext = createContext(null);
const getDefltCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
         cart[index] = 0;
    }
    return cart;
};
const AppContextProvider = ({children}) => {
    const [setCart,upSetCart] = useState(getDefltCart());
    const addToCart = (cartId) => {
        upSetCart((prev) => ({...prev,[cartId]:prev[cartId]+1}));
        // console.log(setCart);
    }
    const removCart = (cartId) => {
        upSetCart((prev) => ({...prev,[cartId]:prev[cartId]-1}))
    }
    const totalAmount = () => {
        let ourAmount = 0;
        for(const items in setCart){
            if(setCart[items]>0){
                let cartInfo = all_product.find((e) => e.id === Number(items));
                ourAmount += cartInfo.new_price * setCart[items];
            }
        }
        return ourAmount;
    }
    const cartNumber = () => {
        let coutn = 0;
        for(const i in setCart){
            if(setCart[i] > 0){
                coutn += setCart[i];
            }
        }
        return coutn;
    }
    const contValue = {cartNumber,totalAmount,all_product,setCart,addToCart,removCart};
    return(
    <AppContext.Provider value={contValue}>{children}</AppContext.Provider>
    );
}
export default AppContextProvider;