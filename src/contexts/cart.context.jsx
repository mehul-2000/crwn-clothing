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

const removeCartItem = (cartItems, productToRemove) => {
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    if (exisitingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    } else {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem)
    }
}

const removeItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}
export const CartContext = createContext({
    isCartOpen: false,
    cartCount: 0,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItem: () => { },
    total: 0,
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    const clearItem = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove));
    }
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotal(newTotal);
    }, [cartItems])
    const value = { total, isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItem }
    // @ts-ignore
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}