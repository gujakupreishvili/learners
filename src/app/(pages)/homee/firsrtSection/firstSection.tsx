import React from 'react'
import childrenImg from "../../../../../public/assets/children.png"
import Image from 'next/image'

export default function FirstSection() {
  return (
    <div className=' flex items-center justify-between  gap-[40px]'>
      <Image  src={childrenImg} alt='childrenimg' className='w-[615px] h-[663px]'/>
      <div className=' flex flex-col'>
        <p className=' text-black font-bold border-b-[2px] border-b-black w-[319px] pb-[4px] text-[18px]'>Welcome to Little Learners Academy</p>
        <h1 className='text-[35px] w-[525px] font-bold leading-[50px] '>Where Young Minds Blossom and <span className='text-[#ff8d4d]'>Dreams Take Flight.</span> </h1>
        <p className='text-[20px] font-medium text-[#4c4c4d] pt-[10px] w-[765px]'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
        <div className='flex justify-between w-[615px] bg-[#ffefe5] mt-[50px] px-[25px] py-[25px] border-[2px] border-black rounded-[10px] shadow-[6px_6px_0px_1px_#FFBE99]'>
          <div className='flex flex-col  '>
            <h4 className='text-[34px] font-extrabold text-black'>+7000</h4>
            <p className='text-[16px] font-medium text-[#262626]'>Students Passed Out</p>
          </div>
          <div className='flex flex-col ' >
            <h4 className='text-[34px] font-extrabold text-black'>+37</h4>
            <p className='text-[16px] font-medium text-[#262626]'>Awards & Recognitions</p>
          </div>
          <div className='flex flex-col '>
            <h4 className='text-[34px] font-extrabold text-black'>
            +15
            </h4>
            <p className='text-[16px] font-medium text-[#262626]'>
            Experience Educators
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
