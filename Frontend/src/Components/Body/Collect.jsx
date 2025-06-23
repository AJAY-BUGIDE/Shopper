import React from 'react'

const Collect = (props) => {
  return (
    <div className='size-50 transition-transform origin-center hover:scale-105'>
      <img className='h-50' src={props.image} alt="#" />
      <h5 className='text-[10px] leading-[1.5]'>{props.name}</h5>
      <div className='flex gap-[20px] leading-[1.1]'>
        <div className='text-sm'>
          {props.new_price}
        </div>
        <div className='text-sm text-gray-500 line-through'>
          {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Collect
