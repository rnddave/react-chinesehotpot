import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart-context';

import {
    CartDropdownStyle,
    EmpytMessage,
    CartItems,
    CartButton,
} from './cart-dropdown.styles'

const CartDropdown = () => {
    const {cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownStyle >
            <CartItems> 
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </CartItems>
            <Button onClick={goToCheckout}>Checkout</Button>
        </CartDropdownStyle>
    );
};

export default CartDropdown;