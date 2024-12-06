import React from 'react'
import teamJson from "./../../../data/team.json"
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'
import {motion} from 'framer-motion'

export default function Team() {
  return (
    <div>
      <motion.div
          initial={{
            opacity:0
            }}
            whileInView={{
            opacity:1,
            scale:1.05,
            transition:{
            duration:2
            }
            }}
            viewport={{
            margin:"-100px 0px 400px 0px"
            }}
       className="flex flex-col justify-center items-center mb-[40px] mt-[70px] ">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
        Our Teachers With Experties
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
        Our Team Members
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
        At Little Learners Academy, our teaching team is the heart
         of our educational journey. We take great pride in employing highly 
         qualified and passionate educators who possess a deep understanding 
         of early childhood development. Our teachers create a warm and engaging 
         atmosphere, encouraging curiosity,
         instilling confidence, and fostering a love for learning.
        </p>
      </motion.div>
      <motion.div
          initial={{
            opacity:0
            }}
            whileInView={{
            opacity:1,
            scale:1.01,
            transition:{
            duration:2
            }
            }}
            viewport={{
            margin:"-100px 0px 400px 0px"
            }}
       className='flex flex-wrap sm:flex-col gap-[50px] justify-center mb-[80px] mt-[50px]'>
        {teamJson.map((res,index)=>(
          <div key={index} className='bg-white px-[50px] py-[20px] w-[40%] sm:w-[100%] border-[2px] border-black  shadow-[4px_4px_0px_1px_#1e1e1e] rounded-[10px] '>
            <div className='flex items-center justify-between '>
            <Image src={res.img} width={100} height={100}  alt='teammember'/>
            <p className='pl-[20px] text-[24px] sm:text-[18px] font-bold'>{res.name}</p>
            <div className='w-[48px] sm:w-[80px] h-[48px] border-[2px] border-black rounded-[8px] flex items-center justify-center bg-[#ffdecc] ml-[50px]'>
            <FaEnvelope />
            </div>
            </div>
            <div className='flex flex-col border-[2px] border-black rounded-[6px] w-[100%] bg-[#fff5f0] px-[25px] py-[20px] mt-[25px]' >
              <p className=' text-[20px] font-semibold pb-[15px]'>{res.qualification}</p> 
              <p className='text-[16px] font-medium w-[100%]'>{res.history}</p>
            </div>
          </div>

        ))}
      </motion.div>
      
    </div>
  )
}
