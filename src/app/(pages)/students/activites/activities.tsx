import React from 'react'
import { FaBolt, FaPaintBrush } from 'react-icons/fa'
import { HiBeaker } from 'react-icons/hi'
import { HiPuzzlePiece } from 'react-icons/hi2'
import { IoMusicalNotes, IoSparkles } from 'react-icons/io5'
import {motion} from 'framer-motion'

export default function Activities() {
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
       className='flex flex-wrap gap-[4%] sm:flex-col'>
        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <FaBolt className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Sports and Athletics</p>
          <p className='text-[20px] font-medium pb-[20px]'>
            Students can participate in various sports, from soccer 
            and basketball to gymnastics and yoga. Sports help promote
             teamwork, physical fitness, and a sense of discipline.
          </p>
        </div>

        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <FaPaintBrush className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Art and Creativity</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Our art classes and creative workshops provide a platform
           for students to express 
          their creativity through painting, drawing,
           and other artistic forms.
          </p>
        </div>

        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <IoMusicalNotes className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Music and Performing Arts</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Students can discover their musical talents through singing,
           playing musical instruments,
            and participating in drama and
             theater performances.
          </p>
        </div>


        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <HiPuzzlePiece  className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Language Clubs</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Language clubs offer an opportunity for students to immerse
           themselves in different languages and cultures,
            fostering global awareness.
          </p>
        </div>


        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <HiBeaker className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Music and Performing Arts</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Students can discover their musical talents through singing,
           playing musical instruments,
            and participating in drama and
             theater performances.
          </p>
        </div>


        <div className='border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[25px] bg-white w-[30%] sm:w-[100%] mb-[50px] mt-[70px]'>
          <div className='border-[2px] border-black rounded-[12px] bg-[#ffdecc] w-[74px] h-[74px] flex items-center justify-center mt-[-30px] mb-[37px] '>
          <IoSparkles className='text-[20px]' />
          </div>
          <p className=' text-[28px] font-bold pb-[24px]'>Music and Performing Arts</p>
          <p className='text-[20px] font-medium pb-[20px]'>
          Students can discover their musical talents through singing,
           playing musical instruments,
            and participating in drama and
             theater performances.
          </p>
        </div>
      </motion.div>
      
    </div>
  )
}
