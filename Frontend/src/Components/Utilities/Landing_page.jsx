import React from 'react'
import Header from './Header'
import Brands from '../Body/Brands'
import AutoSlider from '../Body/Slider'
import Trend from '../Body/Trend'
import Popular from '../Body/Popular'
import Offers from '../Body/Offers'
import NewCollections from '../Body/NewCollections'
import NewsLetter from '../ExtraBody/NewsLetter'

// import Collections from '../Body/Collections'

const Landing_page = () => {
  return (
    <div>
        <Brands/><br />
        {/* <AutoSlider/> */}
        <Trend/>
        <Popular/><br /><br /><br /><br />
        <Offers/>
        {/* <Collections/> */}
        <NewCollections/>
        <br /><br /><br /><br />
        <NewsLetter/>

    </div>
  )
}

export default Landing_page
