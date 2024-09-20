import React from 'react'

export default function() {
  return (
    <div className='flex items-center justify-between bg-white shadow-lg h-24 px-14  sticky top-0  z-50 '>
        <h1 className='font-bold text-3xl '>List <span className=' text-red-500 '>Race</span></h1>
        <div className=''> 
            <ul className='flex gap-10 text-1xl font-bold text-slate-400'>
                <li className=' hover:text-red-500 '>HOME</li>
                <li className=' hover:text-red-500' >HOW IT WORKS</li>
                <li className=' hover:text-red-500' >EXPLORE</li>
                <li className=' hover:text-red-500' >REVIEW</li>
                <li className=' hover:text-red-500' >BLOG</li>
                <li className=' hover:text-red-500' >CONTACT</li>

        </ul>
        </div>
    </div>
  )
}
