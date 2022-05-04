import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss';
import React from 'react'

function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    // @ts-ignore
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon