import React from 'react'
import rect from "../../../../../public/assets/rect.png"
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Navigate() {
  return (
    <div className='mt-[60px] mb-[60px]'>
      <div className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
        Explore More
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px]">
        Navigate through our Pages
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px]">
        Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className='mt-[90px] flex flex-wrap justify-center gap-[50px]'>
      <div className='w-[620px]  bg-white flex flex-col items-center justify-center border-[2px] border-black  shadow-[4px_4px_0px_2px_#262626] rounded-[10px] py-[40px] gap-[30px] px-[40px] '>
        <h1 className='text-[34px]  text-[#1a1a1a] font-bold'>About Us</h1>
        <Image src={rect} alt="" />
        <p className='text-center text-[16px] font-medium text-[#4c4c4d]'>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
      <Link href={"/about"} className='w-[500px] bg-[#ffdecc] h-[64px] border-[2px] border-black shadow-[2px_2px_0px_2px_#1e1e1e] rounded-[8px] flex justify-center  '>
      <p className='flex items-center justify-center text-[18px] font-medium text-[#333333]'> Learn More <span className='pl-[10px]'><FaArrowRight /></span></p>
      </Link>
      </div>

      <div className='w-[620px] bg-white flex flex-col items-center justify-center border-[2px] border-black  shadow-[4px_4px_0px_2px_#262626] rounded-[10px] py-[40px] gap-[30px] px-[40px] '>
        <h1 className='text-[34px] text-[#1a1a1a] font-bold mt-[25px]'>Academics</h1>
        <Image src={rect} alt="" />
        <p className='text-center text-[16px] font-medium text-[#4c4c4d]'>Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
      <Link href={"/academics"} className='w-[500px] bg-[#ffdecc] h-[64px] border-[2px] border-black shadow-[2px_2px_0px_2px_#1e1e1e] rounded-[8px] flex justify-center  '>
      <p className='flex items-center justify-center text-[18px] font-medium text-[#333333]'> Learn More <span className='pl-[10px]'><FaArrowRight /></span></p>
      </Link>
      </div>

      <div className='w-[620px] bg-white flex flex-col items-center justify-center border-[2px] border-black  shadow-[4px_4px_0px_2px_#262626] rounded-[10px] py-[40px] gap-[30px] px-[40px] '>
        <h1 className='text-[34px] text-[#1a1a1a] font-bold'>Student Life</h1>
        <Image src={rect} alt="" />
        <p className='text-center text-[16px] font-medium text-[#4c4c4d]'>Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
      <Link href={"/students"} className='w-[500px] bg-[#ffdecc] h-[64px] border-[2px] border-black shadow-[2px_2px_0px_2px_#1e1e1e] rounded-[8px] flex justify-center  '>
      <p className='flex items-center justify-center text-[18px] font-medium text-[#333333]'> Learn More <span className='pl-[10px]'><FaArrowRight /></span></p>
      </Link>
      </div>

      <div className='w-[620px] bg-white flex flex-col items-center justify-center border-[2px] border-black  shadow-[4px_4px_0px_2px_#262626] rounded-[10px] py-[40px] gap-[30px] px-[40px] '>
        <h1 className='text-[34px] text-[#1a1a1a] font-bold '>Admissions</h1>
        <Image src={rect} alt="" />
        <p className='text-center text-[16px] font-medium text-[#4c4c4d]'>Learn about our Enrollment Process and how to secure your childs place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.</p>
      <Link href={"/admis"} className='w-[500px] bg-[#ffdecc] mt-[25px] h-[64px] border-[2px] border-black shadow-[2px_2px_0px_2px_#1e1e1e] rounded-[8px] flex justify-center  '>
      <p className='flex items-center justify-center text-[18px] font-medium text-[#333333]'> Learn More <span className='pl-[10px]'><FaArrowRight /></span></p>
      </Link>
      </div>
      </div>
    </div>
  )
}
