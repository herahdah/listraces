import React from 'react'
import { MdOutlineHouse } from "react-icons/md";
import { TbCircuitMotor } from "react-icons/tb";
import { FaHotel } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";

export default function Heroitem() {
  
  const item=[
    {
      icon :<MdOutlineHouse size={32} />,
      text:"Resturent",
      paragraph:"150 listings",

    },
    {
      icon:<TbCircuitMotor size={32}/>,
      text:"Destination",
      paragraph:"214 listings",
    },
    {
      icon:<FaHotel size={32}/>,
      text:"Hotels",
      paragraph:"214 listings",

    },
    {
      icon:<GiMedicines size={32}/>,
      text:"Healthcare",
      paragraph:"200 listings",

    },
    {
      icon:<FaCarSide size={32}/>,
      text:"Automation",
      paragraph:"120 listings",

    },

    
  ]
  
  return (
    <div className='absolute top-[510px] z-30 '>
      <div className='flex  gap-10 m-10 ml-36'>
        {
          item.map((itemeach,index)=>(
            <div className='bg-white w-48 mt-5 h-36 shadow-md rounded-sm flex items-center justify-center flex-col hover:bg-red-500 ' >
              {itemeach.icon }
              <h1 className='mt-3 '>{itemeach.text}</h1>
              <p className='mt-3 text-slate-400'>{itemeach.paragraph}</p>
              
            </div>
          ))
        }
      </div>

    </div>
  )
}
