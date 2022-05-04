import React, { useContext } from 'react'
import Button from '../button/button.component'
import './cardDropDown.styles.scss';
import CartItem from '../cartItem/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
function CardDropDown() {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button buttonType="">GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropDown