import React from 'react'
import Button from '../button/button.component'
import './cardDropDown.styles.scss';
function CardDropDown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button buttonType="">GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropDown