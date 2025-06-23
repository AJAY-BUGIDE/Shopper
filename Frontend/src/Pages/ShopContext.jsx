import React, { createContext } from 'react'
import all_product from '../../../Ecommerce_Assets/Assets/Frontend_Assets/all_product.js';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_product};

  return (
    <div>
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider
