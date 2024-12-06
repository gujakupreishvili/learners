import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { FaMaskFace } from 'react-icons/fa6'
import { HiAcademicCap } from 'react-icons/hi'
import { HiLifebuoy } from 'react-icons/hi2'
import { IoFlagSharp, IoPeopleSharp } from 'react-icons/io5'
import { motion } from "motion/react"

export default function Benefits() {
  return (
    <div
     className='flex flex-col mt-[90px] justify-center items-center'>
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
      className='flex flex-col  justify-center items-center mb-[40px]' >
        <button className='text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333] sm:text-[14px] '>Children Deserve Bright Future</button>
        <h3 className='text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px]'>Our Benefits</h3>
        <p className='text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full sm:text-[14px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.</p>
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
       className='flex flex-wrap mb-[50px] justify-between sm:items-center '>
        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <HiAcademicCap className='text-[22px]' />
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Holistic Learning Approach</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
        </div>

        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <FaCrown  className='text-[22px]'/>
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Experienced Educators</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>Our passionate and qualified teachers create a supportive and stimulating learning environment.
          </p>
        </div>
        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <FaMaskFace className='text-[22px]' />
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Nurturing Environment</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
        </div>

        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <IoFlagSharp   className='text-[22px]'/>
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Play-Based Learning</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
        </div>

        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <HiLifebuoy  className='text-[22px]' />
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Individualized Attention</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>Our small class sizes enable personalized attention, catering to each childs unique needs.</p>
        </div>

        <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] '>
          <div className='bg-[#ffdecc] border-[2px] border-black w-[56px] h-[56px] flex items-center justify-center  mt-[-30px] rounded-[8px] mb-[20px]'> 
            <IoPeopleSharp  className='text-[22px]' />
          </div>
          <h3 className='pl-[18px] text-[#1a1a1a] font-extrabold text-[24px] mb-[8px]'>Parent Involvement</h3>
          <p className='pl-[18px] pb-[25px] text-[#4c4c4d] font-medium text-[16px]'>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
        </div>
      </motion.div>
    </div>
  )
}
