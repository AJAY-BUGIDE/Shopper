import React from 'react'
import arrow_icon from '../../../Ecommerce_Assets/Assets/Frontend_Assets/breadcrum_arrow.png'

const BreadCrum = ({ product }) => {
  console.log("BreadCrum product:", product);

  return (
    <div className="flex gap-2 items-center text-sm text-gray-700 my-4">
      HOME <img src={arrow_icon} alt="" className="w-3 h-3" />
      SHOP <img src={arrow_icon} alt="" className="w-3 h-3" />
      {product?.category || 'No category'} <img src={arrow_icon} alt="" className="w-3 h-3" />
      {product?.name || 'No name'}
    </div>
  );
}


export default BreadCrum
