import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {id, name, quantity, price, imageUrl} = cartItem
    const lineItem = price * quantity

    const { removeLineItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => removeLineItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container' key={id}>
            <div className='image-container'>
                <img className='img' src={imageUrl} alt={`${name}`} />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
                <span className='value'> {quantity} </span>
                <span className='arrow' onClick={addItemHandler}>&#10095;</span>
            </div>
            <div className='price'>£{lineItem}</div>
            <div className='remove-button'>
                <span onClick={clearItemHandler}>&#10005;</span>
            </div>
        </div>      
    )
}

export default CheckoutItem;