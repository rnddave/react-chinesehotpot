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

const removeCartItem = (cartItems, cartItemToDecrease ) => {

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrease.id
  );

  if(existingCartItem.quantity === 1) {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
  }

  return cartItems.map((cartItem) => 
      cartItem.id === cartItemToDecrease.id 
        ? {...cartItem, quantity: cartItem.quantity -1, items: cartItems.itemsInCart -1}
        : cartItem
    );
}

const removeLineItem = (cartItems, cartItemToRemove ) => {

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

export const CartContext = createContext({
    cartShow: false,
    setCartShow: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemsInCart: 0,
    removeItemFromCart: () => {},
    removeLineItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
  });
  
  export const CartProvider = ({ children }) => {
    const [cartShow, setCartShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect (() => {
      const newItemsInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      setItemsInCart(newItemsInCart);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToDecrease) => {
      setCartItems(removeCartItem(cartItems, cartItemToDecrease));
    }

    const removeLineItemFromCart = (cartItemToRemove) => {
      setCartItems(removeLineItem(cartItems, cartItemToRemove));
    }

    useEffect(() => {
      const newCartCount = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setCartCount(newCartCount);
    }, [cartItems]);
  
    useEffect(() => {
      const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
      setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = { 
      cartShow, 
      setCartShow, 
      addItemToCart, 
      cartItems, 
      itemsInCart, 
      removeItemFromCart, 
      removeCartItem, 
      removeLineItemFromCart, 
      cartCount, 
      cartTotal, 
    };

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };