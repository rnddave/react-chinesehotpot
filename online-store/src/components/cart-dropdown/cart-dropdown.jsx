import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart-context';

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles'

const CartDropdown = () => {
    const {cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer >
            <CartItems> 
{/*                 {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))} */}
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckout}>Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;