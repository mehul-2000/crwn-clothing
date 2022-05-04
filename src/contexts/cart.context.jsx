import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains product to addItemToCart
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //if found increment quantity of cartItems
    if (exisitingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem)
    }
    //return new array cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
export const CartContext = createContext({
    isCartOpen: false,
    cartCount: 0,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },

})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }
    // @ts-ignore
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}