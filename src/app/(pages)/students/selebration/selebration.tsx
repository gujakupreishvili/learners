import React from 'react'
import activeJson from "../../../data/active.json"
import Image from 'next/image'

export default function Selebration() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
        Our Features
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
        Events & Celebrations
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
        At Little Learners Academy, we celebrate every milestone
        and create cherished memories for our students. Throughout the year,
        we host a variety of events and celebrations that bring the entire
        school community together. Some of our memorable events include
        </p>
      </div>
      <div className='flex flex-wrap gap-[8%] justify-center  items-center sm:flex-col '>
        {activeJson.map((res,index)=>(
          <div key={index} className='bg-white border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_1px_#1e1e1e] w-[25%] h-[400px] sm:w-[100%] flex flex-col justify-center items-center py-[40px] mb-[40px]'>
            <Image src={res.img} alt='sport' width={300} height={300}/>
            <p className='pt-[20px] pb-[15px] text-[24px] font-bold'>{res.event}</p>
            <p className='w-[70%] text-center text-[16px]'>{res.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}
