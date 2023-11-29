// create a way to store state of cart (open or closed) 
// trigger with an OnClick

import { createContext, useState, useEffect } from 'react';

// a helper function to help me check if things are in cart already
const addCartItem = (cartItems, productToAdd ) => {


  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if(existingCartItem) {

    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity +1, items: cartItems.itemsInCart +1}
        : cartItem
    );
  }

  // return new array with modified cartItems (quantities etc) 
  return (
    [...cartItems, {...productToAdd, quantity: 1, items: cartItems.itemsInCart +1}]
    );
}


export const CartContext = createContext({
    cartShow: false,
    setCartShow: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemsInCart: 0,
  });
  
  export const CartProvider = ({ children }) => {
    const [cartShow, setCartShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    useEffect (() => {
      const newItemsInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      setItemsInCart(newItemsInCart);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { cartShow, setCartShow, addItemToCart, cartItems, itemsInCart};

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };