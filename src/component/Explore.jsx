import React from 'react'
import image1 from '../assets/e1.jpg'

export default function Explore() {
    const explore=[
        {
            image:image1,
            tom:'Tommy Helfinger Bar',


        }

    ]

    
  return (
    <div className='mt-14'>
        <div className='bg-slate-300 h-[100vh] text-center pt-24'>
            <h1 className='uppercase text-3xl'>explore</h1>
            <p className='pt-7 text-xl text-slate-500'>Explore New place, food, culture around the world and many more</p>
        </div>
        <div>
            <img src={image1} alt="" />
        </div>
    </div>
  )
}
