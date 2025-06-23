import React from 'react'

const arr = [
  "/Brands/Kilos.jpg",
  "/Brands/Mobiles.jpg",
  "/Brands/Fashion.jpg",
  "/Brands/Electronics.jpg",
  "/Brands/Home&Furniture.jpg",
  "/Brands/Appliances.jpg",
  "/Brands/Flight Bookings.jpg",
  "/Brands/Beauty, Toys&More.jpg",
  "/Brands/Two Wheelers.jpg"
  // \public\Brands\Appliances.jpg
]

const brands = ["Kilos", "Mobiles", "Fashion", "Electronics", "Home&Furniture",
                       "Appliances", "Flight Bookings", "Beauty, Toys&More", "Two Wheelers"]

const Brands = () => {
  return (
    <div className='flex justify-around mx-20'>
      {
        arr.map((item, index) => ( 
          <div key={index}>
            <img src={item} alt="#" />
            <h6 className='text-center'> {brands[index]} </h6>
          </div>
        ))   
      }
    </div>
  )
}

export default Brands


