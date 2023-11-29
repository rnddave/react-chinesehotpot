// create a way to store state of cart (open or closed) 
// trigger with an OnClick

import { createContext, useState } from 'react';

// a helper function to help me check if things are in cart already
const addCartItem = (cartItems, productToAdd) => {
  
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  );

  // if found, increment quantity
  if(existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id == productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity +1}
        : cartItem
    );
  }

  // return new array with modified cartItems (quantities etc) 
  return [...cartItems, {...productToAdd, quantity: 1}];

}


export const CartContext = createContext({
    cartShow: false,
    setCartShow: () => {},
    cartItems: [],
    addItemToCart: () => {},
  });
  
  export const CartProvider = ({ children }) => {
    const [cartShow, setCartShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { cartShow, setCartShow, addItemToCart, cartItems };

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };