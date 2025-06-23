import React from 'react'
import logo_big from '../../../public/Frontend_Assets/logo_big.png'
import instagram_icon from '../../../public/Frontend_Assets/instagram_icon.png'
import pintester_icon from '../../../public/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../../../public/Frontend_Assets/whatsapp_icon.png'

const Footer_down = () => {
  return (
    <div className="bg-white-500 text-black py-10 px-6 md:px-20 justify-items-center gap-8 w-[65%] rounded-2xl ml-65">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo_big} alt="Shopper Logo" className="w-28 h-auto mb-2" />
        <p className="justify-items-center text-4xl font-bold tracking-wide">SHOPPER</p>
      </div>

      {/* Links Section */}
      <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left text-sm md:text-base font-medium">
        <li className="hover:text-gray-400 cursor-pointer">Company</li>
        <li className="hover:text-gray-400 cursor-pointer">Products</li>
        <li className="hover:text-gray-400 cursor-pointer">Offices</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    <br />
      {/* Social Icons */}
      <div className="flex gap-4">
        <img src={instagram_icon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        <img src={pintester_icon} alt="Pinterest" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
      </div>
      <br />
      <div>
        <hr />
        <p>CopyRights @ 2025 - All Rights are reserved</p>
      </div>
    </div>
  )
}

export default Footer_down
