import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className='image  flex justify-center items-center  h-[90vh] relative z-10'>
        <div >
                <div className='text-center'>
                <h1 className='text-white uppercase text-5xl font-extrabold leading-normal'>best place to find and explore <br/> that all you need</h1>
               <h2 className='text-white font-medium mt-8'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</h2>

            </div>
            <div className='mt-14 flex items-center gap-8'>
              <p className='bg-white  p-3  w-[100%] rounded-md font-semibold'>what?<input type="text" placeholder='Ex:place,Resturent,Food,Automobile'  className='w-[50%]  '  />  location <input type="text" placeholder='Ex:London Newyork,Nigeria' className='w-[32%] '  /> </p>
              <button className='bg-red-600 py-3 px-10 text-white rounded-md hover:bg-red-500'>search</button>
            </div> 
        </div>
    </div>
  )
}
