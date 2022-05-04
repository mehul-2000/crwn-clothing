import { Fragment, useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import "./navigation.styles.scss";
import { signOutUser } from '../../utils/firebase/firebase.util'
import CardDropDown from '../../components/cart-dropdown/cardDropDown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) :
                            (
                                <Link className="nav-link" to="/signIn">
                                    SIGN-IN
                                </Link>
                            )

                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CardDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation
