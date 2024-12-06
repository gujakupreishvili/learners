'use client'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import userData from "../../../data/users.json"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { motion } from "motion/react"
import { easeInOut } from 'motion'


export default function Comment() {
  return (
    <div className='mt-[110px] flex flex-col justify-between items-center mb-[80px]'>
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
       className='flex flex-col  justify-center items-center mb-[40px] '>
        <button className='text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]'>
          Their Happy Words 🤗
        </button>
        <h3 className='text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px]'>Our Testimonials</h3>
        <p className='text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full'>
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
        </p>
      </motion.div>
      <motion.div
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1,
            scale:1.1,
            transition:{
              duration:2
            }
          }}
          viewport={{
            margin:"-100px 0px 400px 0px"
          }}
       className='flex items-center justify-between w-full'>
        <motion.div
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95, rotate:"-2.5deg"}}
        transition={{duration:0.125,ease:easeInOut}}
          className='bg-white border-[2px] border-black rounded-[8px] w-[78px] h-[48px] ml-[50px] sm:ml-[0px]  flex items-center justify-center cursor-pointer sm:mr-[8px] mr-[20px] sm:w-[190px] '
          id='prev-btn'
        >
          <FaArrowLeft />
        </motion.div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '#next-btn',
            prevEl: '#prev-btn',
          }}
          modules={[Navigation]}
        
        >
          <div  className='flex justify-between items-center gap-[30px] '>
          {userData.map((user, index) => (
            <SwiperSlide key={index}>
              <div 
              className='flex flex-col gap-[18px] justify-center items-center w-[340px] sm:w-full bg-white  px-[20px] py-[35px] border-[2px] border-black rounded-[9px] shadow-[4px_4px_0px_2px_#262626] mb-[5px] '>
              <Image src={user.img} alt='user' width={50} height={50} />
              <p>{user.user}</p>
              <Image src={user.rating} alt='stars' width={140} height={24} />
              <p className='text-center'>{user.comment}</p>
              </div>
            </SwiperSlide>
          ))}
           </div>
        </Swiper>
        <motion.div
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95, rotate:"2.5deg"}}
         transition={{duration:0.125,ease:easeInOut}}
          className='bg-white border-[2px] border-black rounded-[8px] w-[78px] h-[48px]  sm:mr-[0px] mr-[50px] flex items-center justify-center cursor-pointer sm:w-[190px] sm:ml-[8px]'
          id='next-btn'
        >
          <FaArrowRight />
        </motion.div>
      </motion.div>
    </div>
  )
}
