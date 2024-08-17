import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import Item from "../component/Item/Item";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] === 1) {
                const { [itemId]: _, ...rest } = prev; // Remove the item if its count is 1
                return rest;
            }
            return {
                ...prev,
                [itemId]: prev[itemId] - 1
            };
        });
    };

   const getTotalCartAmount = () =>{
    let totalAmount=0;
    for (let item in cartItems) {
        if (cartItems[item]>0){
        let itemInfo= food_list.find((product)=> product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
        }
    }
    return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
