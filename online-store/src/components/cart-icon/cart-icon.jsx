import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as Basket } from '../../assets/shopping-bag.svg'


import {
    CartIconContainer,
    CartIconImage,
    CartItemCount
} from './cart-icon.styles'

const CartIcon = () => {

    const { cartShow, setCartShow, itemsInCart } = useContext(CartContext);
    const toggleIsCartOpen = () => setCartShow(!cartShow);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <Basket >
                <CartIconImage />
            </Basket>
            <CartItemCount as='span'>{itemsInCart}</CartItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;