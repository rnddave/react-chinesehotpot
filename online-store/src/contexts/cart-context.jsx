// create a way to store state of cart (open or closed) 
// trigger with an OnClick

import { createContext, useState } from 'react';

export const CartContext = createContext({
    cartShow: false,
    setCartShow: () => {},
  });
  
  export const CartProvider = ({ children }) => {
    const [cartShow, setCartShow] = useState(false);
    const value = { cartShow, setCartShow };
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };