import React from 'react'
import childrenImg from "../../../../../public/assets/children.png"
import Image from 'next/image'
import mobileImage from "../../../../../public/assets/mobileImage.png"

export default function FirstSection() {
  return (
    <div className=' flex items-center justify-between  gap-[40px] sm:flex-col sm:items-center sm:justify-center'>
      <Image  src={childrenImg} alt='childrenimg' className='w-[615px] h-[663px] sm:hidden '/>
      <Image  src={mobileImage} alt="mobile img " className='hidden sm:block sm:w-full'/>
      
      <div className=' flex flex-col w-[100%]'>
        <p className=' text-black font-bold border-b-[2px] border-b-black w-[319px] pb-[4px] text-[18px] sm:text-[16px]'>Welcome to Little Learners Academy</p>
        <h1 className='text-[35px] w-[525px] font-bold leading-[50px] sm:w-full sm:text-[30px]'>Where Young Minds Blossom and <span className='text-[#ff8d4d]'>Dreams Take Flight.</span> </h1>
        <p className='text-[20px] font-medium text-[#4c4c4d] pt-[10px] w-[765px] sm:w-full sm:text-[16px]'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
        <div className='flex justify-between w-[615px] bg-[#ffefe5] mt-[50px] px-[25px] py-[25px] border-[2px] border-black rounded-[10px] shadow-[6px_6px_0px_1px_#FFBE99] sm:flex-col sm:w-[100%] sm:justify-center sm:items-center'>
          <div className='flex flex-col  '>
            <h4 className='text-[34px] font-extrabold text-black sm:text-center'>+7000</h4>
            <p className='text-[16px] font-medium text-[#262626]'>Students Passed Out</p>
          </div>
          <div className='w-[90%] h-[2px] bg-black my-[12px] hidden sm:block'></div>
          <div className='flex flex-col ' >
            <h4 className='text-[34px] font-extrabold text-black  sm:text-center'>+37</h4>
            <p className='text-[16px] font-medium text-[#262626]'>Awards & Recognitions</p>
          </div>
          <div className='w-[90%] h-[2px] bg-black my-[12px] hidden sm:block'></div>
          <div className='flex flex-col '>
            <h4 className='text-[34px] font-extrabold text-black  sm:text-center'>
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
