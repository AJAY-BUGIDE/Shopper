import React, { use, useContext } from 'react';
import star_icon from '../../../Ecommerce_Assets/Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../../../Ecommerce_Assets/Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../Pages/ShopContext';

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-20 py-10">
      
      {/* Left - Images */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Thumbnail list */}
        <div className="flex lg:flex-col gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`Thumbnail ${index}`}
              className="w-20 h-20 object-contain border p-1 rounded-md cursor-pointer hover:shadow-md"
            />
          ))}
        </div>

        {/* Main image */}
        <div>
          <img
            src={product.image}
            alt="Main Product"
            className="w-[300px] h-[300px] object-contain border rounded-md"
          />
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="flex flex-col gap-5 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((_, i) => (
            <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
          ))}
          <img src={star_dull_icon} alt="dull star" className="w-5 h-5" />
          <p className="text-sm text-gray-600">(122 reviews)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold text-red-600">${product.new_price}</div>
          <div className="text-sm text-gray-500 line-through">${product.old_price}</div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          A lightweight, breathable fabric that is perfect for summer wear. 
          This product is designed to keep you comfortable and stylish all day long.
        </p>

        {/* Size Selector */}
        <div>
          <h2 className="font-medium text-gray-800 mb-2">Select Size</h2>
          <div className="flex gap-3">
            {['S', 'M', 'L', 'XL'].map((size, index) => (
              <button
                key={index}
                className="border px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button onClick={()=>{addToCart(product.id)}} className="mt-4 w-full md:w-1/3 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition cursor-pointer">
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <div className="text-sm text-gray-600 mt-4">
          <p><span className="font-semibold text-gray-800">Category:</span> Women, T-Shirt, Crop-Top</p>
          <p><span className="font-semibold text-gray-800">Tags:</span> Trend, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
