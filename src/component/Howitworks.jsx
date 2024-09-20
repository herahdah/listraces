import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";



export default function Howitworks() {
        const works=[
            {
                icon:< HiOutlineLightBulb size={50}/>,
                choose:"choose what to do",
                text:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
                last:<button>Read me</button>
            },
            {
                icon:< FaCarSide size={50}/>,
                choose:"Find what to do",
                text:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
                last:<button>Read me</button>
            },
            {
                icon:< MdLocationPin size={50}/>,
                choose:"Amazing explore people",
                text:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
                last:<button>Read me</button>
            }
        ]

  return (
    <div className='mt-44 text-center '>
        <h1 className='uppercase font-semibold text-3xl text-gray-500 '> how it works </h1>
        <p className='font-semibold text-lg  text-gray-500 mt-4'>Learn More about how our website works</p>
        <div>
            <div className='flex ml-24 mr-16 mt-14'>
                {
                    works.map((workseach,index)=>(
                        <div className='bg-white shadow-2xl rounded-md w-[25%] m-9 h-[50vh] flex items-center justify-center flex-col hover:bg-red-500  transition-all'>
                            {workseach.icon }
                            <h1 className='mt-7 text-2xl '>{workseach.choose}</h1>
                            <h3 className='mt-5'>{workseach.text}</h3>
                            <button className='  bg-white border px-6 py-2 mt-5'> {workseach.last}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

    
  )
}
