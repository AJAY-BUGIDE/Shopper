import React from 'react'

const NewsLetter = () => {
  return (
    <div className="ml-65 w-[65%] bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-12 px-4 
    flex flex-col items-center text-center space-y-4 rounded-2xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Get Exclusive Offers on Email</h1>
      <p className="text-gray-600 text-base md:text-lg">Subscribe to our newsletter and stay updated</p>
      
      <div className="flex flex-col sm:flex-row items-center mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-[300px] ml-[30px] border-none outline-none text-[#616161] font-[Poppins] text-[16px]"
      />
        <button className="w-[120px] h-[40px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
            Subscribe
        </button>

      </div>
    </div>
  )
}

export default NewsLetter
