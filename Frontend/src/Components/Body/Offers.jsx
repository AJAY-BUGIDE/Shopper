import React from 'react'
import exclusive_image from '../../../public/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex w-[65%] h-[60vh] mx-auto px-[140px] py-0 mb-[50px] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-2xl font-bold'>Exclusive</h1>
        <h1 className='text-2xl font-bold'>Offers for you</h1>
        <p className='text-gray-600 mt-2 w-100'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='w-[100px] h-[35px] mt-4 bg-pink-500 text-white rounded-2xl hover:bg-pink-600 transition'>Check Now</button>
      </div>
      <div className='flex justify-end items-center w-full pt-[50px]'>
        <img src={exclusive_image} alt="Exclusive Offer" className='h-full object-contain' />
      </div>
    </div>
  )
}

export default Offers
