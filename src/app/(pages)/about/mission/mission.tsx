import React from 'react'
import mountain from "../../../../../public/assets/about/mount.png"
import vision from "../../../../../public/assets/about/vision.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <div className='mt-[100px]'>
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
        Mission & Visions
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
        Our Mission & Visions
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
        We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
        </p>
      </motion.div>
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
       className='flex gap-[60px] mb-[70px] sm:flex-col sm:justify-center sm:items-center '>
        <div className='flex flex-col bg-white border-[2px] border-black rounded-[10px] w-[80%] sm:w-[100%] px-[25px] py-[20px] shadow-[4px_4px_0px_1px_#1e1e1e] '>
          <div className='flex justify-between items-center'>
            <h3 className='text-[38px] font-bold'>Mission</h3>
            <Image src={mountain} alt='mountain' />
          </div>
          <p className='text-[16px] font-medium pt-[35px] pb-[15px] w-full'>
          At Little Learners Academy, our mission is to 
          inspire a passion for learning and empower young minds
           to become confident, compassionate, and creative individuals.
            We strive to create a safe and inclusive space where children
             thrive academically, socially,
           and emotionally, setting the stage for a successful educational journey.
          </p>
        </div>
        <div  className='flex flex-col bg-white border-[2px] border-black rounded-[10px] w-[80%] sm:w-[100%] px-[25px] py-[20px] shadow-[4px_4px_0px_1px_#1e1e1e]'>
        <div className='flex justify-between items-center'>
            <h3 className='text-[38px] font-bold'>Vision</h3>
            <Image src={vision} alt='mountain' />
          </div>
          <p className='text-[16px] font-medium pt-[35px] pb-[15px] w-full'>
          Our vision is to be a beacon of educational excellence,
           where children are encouraged to explore, discover, 
           and express their unique talents. We aim to foster a generation
            of lifelong learners equipped with critical thinking, empathy,
             and a deep appreciation for diversity.
          </p>
        </div>
      </motion.div>  
    </div>
  )
}
