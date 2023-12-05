import { createContext, useState, useEffect } from 'react';

// don't need this line after we've done the initial set data to db. 
// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // we're using this use-effect to build the initial database entries, 
  // but after running, we should remove otherwise we will re-initialise the database 
  // each time it is run - which probably isn't that useful... 
  /* 
  useEffect(() => {
    addCollectionAndDocuments('caegories', SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('caegories'); // NB I mistyped Categories when creating it in DB
      console.log(categoryMap)
    }

    getCategoriesMap();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};