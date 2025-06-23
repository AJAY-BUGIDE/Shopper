import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginSignup from '../../Pages/LoginSignup'
// import logo from "../public/logo.png"

const Header = () => {
    const [menu, setMenu] = useState("shop")
    const path = `/header/logo.png`
    const logo = `/header/cart_icon.png`
    const navigate = useNavigate();
    return (
      <div className='flex items-center justify-around'>
          <div className='flex items-center text-3xl text-blue-900 font-bold'>
              <img src={path} alt="" />
              <h1>Shopper</h1>
          </div>
          <ul className='flex gap-5 font-bold text-gray-400' >
              <button onClick={()=>navigate('/')}><li className='cursor-pointer' onClick={()=> setMenu("shop")} >Shop {menu==="shop"?<hr className='border-none w-auto h-1 rounded-2xl bg-red-500'/>:<></>}</li></button>
              <button onClick={()=>navigate('/mens')}><li className='cursor-pointer' onClick={()=> setMenu("mens")} >Men  {menu==="mens" ?<hr className='border-none w-auto h-1 rounded-2xl bg-red-500'/>:<></>}</li></button>
              <button onClick={()=>navigate('/womens')}><li className='cursor-pointer' onClick={()=> setMenu("womens")} >Women {menu==="womens"?<hr className='border-none w-auto h-1 rounded-2xl bg-red-500'/>:<></>}</li></button>
              <button onClick={()=>navigate('/kids')}><li className='cursor-pointer' onClick={()=> setMenu("kids")} >Kids {menu==="kids"?<hr className='border-none w-auto h-1 rounded-2xl bg-red-500'/>:<></>}</li></button>
          </ul>
          <div className='flex items-center gap-10'>
              <button onClick={()=>navigate('/login')} className='font-medium w-30 h-10 bg-gray-300 rounded-2xl cursor-pointer  hover:bg-pink-600 transition'>Login</button>
              <img src={logo} alt="" />
              <div className='flex items-center text-center -mt-8 -ml-12 rounded-2xl w-3 h-4 bg-red-500'>0</div>
          </div>
      </div>
    
    )
}

export default Header
