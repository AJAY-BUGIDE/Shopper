import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Collections from './Collections'

const Trend = () => {
    const handicon = `/Trends/hand_icon.png`
    const heroimg = `/Trends/hero_image.png`
    const arrow = `/Trends/arrow.png`
    const navigate = useNavigate();
    // console.log(arrow)
    // D:\4-2\GFG_MERN\Ecommerce_Flipkart\Frontend\public\Trends\arrow.png
  return (
    <div className='flex justify-around items-center bg-amber-100 h-100vh'>
      <div className='leading-10'>
        <h2 className='font-bold'>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center text-5xl font-medium '>
            <h1>new</h1>
            <img className='h-10' src={handicon} alt="#" />
        </div>
        <p className='text-5xl font-medium' >collections</p>
        <p className='text-5xl font-medium'>for everyone</p><br />
        <div className='flex items-center justify-around bg-red-500 w-50 rounded-2xl h-7 cursor-pointer'>
            <button onClick={()=> navigate('/collection')} className='font-semibold text-sm cursor-pointer'>Latest Collections </button>
            <img className='h-4' src={arrow} alt="#" />
        </div>
      </div>
      <div >
        <img className='h-100' src={heroimg} alt="#" />
      </div>
    </div>
  )
}

export default Trend
