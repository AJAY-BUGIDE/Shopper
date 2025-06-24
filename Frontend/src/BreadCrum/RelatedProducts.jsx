import React from 'react';
import data_product from '../../public/Frontend_Assets/data.js';
import Item from '../Components/Body/Item.jsx';

const RelatedProducts = () => {
  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Related Products</h1>
      <hr className="mb-6 border-gray-300" />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
