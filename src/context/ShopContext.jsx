import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState();
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity === 0) {
        delete cartData[itemId][size];

        // If no sizes left, delete the itemId
        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }
    } else {
        cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);
};


    const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
        const product = products.find((p) => p._id.toString() === itemId.toString());
        if (!product) continue;

        const sizes = cartItems[itemId];
        for (const size in sizes) {
            const quantity = sizes[size];
            if (quantity > 0) {
                totalAmount += product.price * quantity;
            }
        }
    }
    return totalAmount;
};


    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;