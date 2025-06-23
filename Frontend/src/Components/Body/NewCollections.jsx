import React from 'react'
import new_collections from '../../../public/Frontend_Assets/new_collections.js'
import Item from './Item'


const NewCollections = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>NEW COLLECTIONS</h1>
      <hr className='mb-5 ml-139 border-none w-100 h-1 rounded-2xl bg-gray-500'/>
      <div className='grid grid-cols-4 w-[65%] mx-auto mt-[30px] gap-[50px] justify-items-center'>
        {new_collections.map((item, i) => {
          return <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        })}
      </div>
    </div>
  )
}

export default NewCollections
