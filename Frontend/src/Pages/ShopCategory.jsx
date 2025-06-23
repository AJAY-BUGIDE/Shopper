import React, { useContext } from 'react'
import dropdown_icon from '../../../Ecommerce_Assets/Assets/Frontend_Assets/dropdown_icon.png'
import { ShopContext } from './ShopContext';
import Item from '../Components/Body/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="w-full px-4 md:px-20 py-8">
      
      {/* Banner */}
      <div className="w-full mb-6">
        <img src={props.banner} alt="Category Banner" className="w-full rounded-lg object-cover max-h-[300px]" />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Showing 1-12</span> out of 36.
        </p>
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md cursor-pointer hover:shadow-md">
          <span className="text-gray-700 text-sm">Sort by</span>
          <img src={dropdown_icon} alt="Sort Dropdown" className="w-4 h-4" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15">
        {all_product
          .filter(item => props.category === item.category)
          .map((item, i) => (
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
  )
}

export default ShopCategory
