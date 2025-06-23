import React from 'react'
import new_collections from '../../../public/Collections/new_collections.js'
import Collect from './Collect.jsx'
import Header from '../Utilities/Header.jsx'

const Collections = () => {
  return (
    <div>
        <Header/><br /><br />
        <div className='flex'>
          {new_collections.map((item, i)=>{
              return <Collect key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default Collections
