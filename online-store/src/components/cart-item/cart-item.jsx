import {
    CartItemContainer,
    CartItemImage,
    CartItemDetails,
    CartItemName
} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price, } = cartItem;
    
    return (
        <CartItemContainer>
            <CartItemImage as='img' src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartItemName as='span'>{name}</CartItemName>
                <span className='price' >{quantity} x £{price}</span>

            </CartItemDetails>
            
        </CartItemContainer>
        
    )
}

export default CartItem;