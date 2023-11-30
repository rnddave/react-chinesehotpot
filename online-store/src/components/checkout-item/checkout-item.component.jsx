import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './checkout-item.styles.scss'


const CheckoutItem = () => {
    const { cartItems, addItemToCart, removeItemFromCart, removeLineItemFromCart } = useContext(CartContext);

    return (
        <div> 
            {cartItems.map((cartItem) => {
                const {id, name, quantity, imageUrl} = cartItem

                return (
                    <div className='checkout-item-container' key={id}>
                        <div className='image-container'>
                            <img className='img' src={imageUrl} alt={`${name}`} />
                        </div>
                        <div className='name'>{name}</div>
                        <div className='quantity'>
                            <span className='arrow' onClick={() => removeItemFromCart(cartItem)}>⬅️</span>
                            <span className='value'> {quantity} </span>
                            <span className='arrow' onClick={() => addItemToCart(cartItem)}>➡️</span>
                        </div>
                        <div className='price'>£</div>
                        <div className='remove-button'>
                            <span onClick={() => removeLineItemFromCart(cartItem)}>🚮</span>
                        </div>
                    </div>    
                )
            })}
        </div>
    )
}

export default CheckoutItem;