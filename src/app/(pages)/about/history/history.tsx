import React from 'react'
import cubs from "../../../../../public/assets/about/cubs.png"
import Image from 'next/image'
import {motion} from "framer-motion"

export default function History() {
  return (
    <>
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
         className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
        Our Progressive Journey
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
        Our History
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
        Founded with a passion for early education in 2005, 
        our kindergarten school boasts a rich history of 
        empowering young learners to reach their potential
         through innovative teaching methods and a supportive
          learning environment
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
     className='bg-[white] py-[70px] px-[90px] sm:px-[20px]   flex flex-col gap-[70px] border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] mb-[50px]'>
      <div className='flex gap-[150px] sm:flex-col sm:gap-[50px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2023</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px] sm:w-full'>
          <p className='text-[28px] font-bold'>Resilience and Future Horizons</p>
          <p>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
        </div>
      </div>

      <div className='flex gap-[150px] sm:flex-col sm:gap-[50px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2017</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px] sm:w-full'>
          <p className='text-[28px] font-bold'>Innovation and Technology</p>
          <p>Innovation became the driving force behind our kindergartens progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
        </div>
      </div>

      <div className='flex gap-[150px] sm:flex-col sm:gap-[50px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2012</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px] sm:w-full'>
          <p className='text-[28px] font-bold'>Expansion and Recognition</p>
          <p>These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
        </div> 
      </div>

      <div className='flex gap-[150px] sm:flex-col sm:gap-[50px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2005</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px] sm:w-full'>
          <p className='text-[28px] font-bold'>Inception and Growth</p>
          <p>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth. </p>
        </div>
      </div>
    </motion.div>
    
    </>
  )
}
