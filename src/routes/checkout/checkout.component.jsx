import './checkout.styles.scss';
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkOutItem/checkOutItem.component'

function Checkout() {
    const { cartItems, total } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map((item) => {
                    const { id } = item;
                    return <CheckOutItem cartItem={item} key={id} />
                })
            }
            <span className="total">Total : ${total}</span>
        </div>
    )
}

export default Checkout