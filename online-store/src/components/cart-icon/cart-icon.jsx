import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as Basket } from '../../assets/shopping-bag.svg'


import './cart-icon.styles.scss'

const CartIcon = () => {

    const { cartShow, setCartShow } = useContext(CartContext);
    const toggleIsCartOpen = () => setCartShow(!cartShow);

    return(
        <div className='cart-icon-container'>
            <Basket className='shopping-icon' onClick={toggleIsCartOpen} />
            <span className='item-count'></span>
        </div>
    )
};

export default CartIcon;