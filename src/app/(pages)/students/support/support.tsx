import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { IoBook } from 'react-icons/io5'
import { MdGroups2 } from 'react-icons/md'

export default function Support() {
  return (
    <div className='mt-[70px]'>
        <div className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
        Our Achievements
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
        Student Support
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
        At Little Learners Academy, we are committed to
         providing a supportive and nurturing environment that meets
         the unique needs of each student. Our student support services include
        </p>
      </div>
      <div className='flex justify-center items-center gap-[40px] sm:flex-col'>
      <div className='border-[2px] border-black rounded-[12px]  shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <FaLightbulb  className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Counseling</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Professional counselors offer guidance and support to students,
           addressing their emotional and social well-being.
          </p>
        </div>
        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] '>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <IoBook  className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Learning Support</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Our educators provide additional assistance to students who may require extra support in their academic journey.
          </p>
        </div>
        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] '>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <MdGroups2  className='text-[30px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px] w-[100%]'>Teacher Collaboration</p>
          <p className='text-[20px] font-medium pb-[20px] w-[100%]'>
          We foster a strong partnership with parents to ensure seamless communication  support in a childs.
          </p>
        </div>
        

      </div>
      
    </div>
  )
}
