import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {id, name, quantity, price, imageUrl} = cartItem
    const lineItem = price * quantity

    const { removeLineItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => removeLineItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer key={id}>
            <ImageContainer>
                <img className='img' src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow as='span' onClick={removeItemHandler}>&#10094;</Arrow>
                <Value as='span'> {quantity} </Value>
                <Arrow as='span' onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan as='span'>£{lineItem}</BaseSpan>
            <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton>
        </CheckoutItemContainer>      
    )
}

export default CheckoutItem;