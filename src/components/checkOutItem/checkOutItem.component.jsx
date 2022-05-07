import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import './checkOutItem.styles.scss';
function CheckOutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(
                    // @ts-ignore
                    cartItem)}>
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={() => addItemToCart(
                    // @ts-ignore
                    cartItem)}>
                    &#10095;
                </div></span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(
                // @ts-ignore
                cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem