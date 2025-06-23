import React from 'react'
import data_product from '../../../public/Popular/data.js';
import Item from './Item.jsx';
import { useNavigate } from 'react-router-dom';
const Popular = () => {
  // const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-center font-bold text-3xl mt-2'>POPULAR IN WOMEN</h1>
        <hr className='mb-5 ml-139 border-none w-100 h-1 rounded-2xl bg-gray-500'/>
        <div className='flex justify-center'>
          {data_product.map((item, i)=>{
              return <Item key={i} id = {item.id} name = {item.name} new_price = {item.new_price} old_price = {item.old_price} image = {item.image}/>
          })}
        </div>
    </div>
  )
}

export default Popular
