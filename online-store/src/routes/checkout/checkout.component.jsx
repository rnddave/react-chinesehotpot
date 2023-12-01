import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';



const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const {quantity, price} = cartItems;
    const cartTotal = quantity * price;

    return (
        <div className='checkout-container'>
            
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <CheckoutItem />
            <div className='total'>
                    <span>Total: {cartTotal}</span>
                </div>
        </div>
    );
}

export default Checkout;
