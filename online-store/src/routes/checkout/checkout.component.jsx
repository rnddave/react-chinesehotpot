import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './checkout.styles.scss'


const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, removeLineItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-items-container'>
            <div className='img'> 
                {cartItems.map((cartItem) => {
                    const {id, name, quantity} = cartItem
                    return <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span onClick={() => removeItemFromCart(cartItem)}> decrease</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}> increase</span>
                            <br />
                            <span onClick={() => removeLineItemFromCart(cartItem)}> remove</span>
                        </div>
                    })}
            </div>
        </div>
    );
}

export default Checkout;
