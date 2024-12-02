import React from 'react'
import logo from "../../../../public/assets/logo.png"
import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='flex flex-col bg-white rounded-[12px] border-[2px] border-black mb-[50px] mt-[50px] shadow-[6px_6px_0px_2px_#1e1e1e] px-[50px] py-[35px]'>
    <div className='  flex justify-between'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-[15px] '>
          <Image src={logo} alt='logo' className='w-[34px] h-[34px]' />
          <p className='text-[16px] font-bold ml-[-8px]'>Little Learners</p>
        </div>
        <p className='text-[20px] text-[#4c4c4d] font-medium w-[519px] leading-[25px] pt-[25px] pb-[50px]'>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
        <div className='flex flex-col  gap-[17px]'>
          <div className='flex items-center gap-[12px]'>
            <div className=' border-[2px] border-black w-[40px] h-[40px] rounded-[6px] flex justify-center items-center bg-[#fff5f0]'>
            <MdEmail className='w-[23px] h-[23px]' />
            </div>
            <p>hello@littlelearners.com</p>
          </div>
          <div  className='flex items-center gap-[12px]'>
            <div className=' border-[2px] border-black w-[40px] h-[40px] rounded-[6px] flex justify-center items-center bg-[#fff5f0]'>
            <IoCall className='w-[23px] h-[23px]'  />
            </div>
            <p>+91 91813 23 2309</p>
          </div>
          <div className='flex items-center gap-[12px]'>
            <div className=' border-[2px] border-black w-[40px] h-[40px] rounded-[6px] flex justify-center items-center bg-[#fff5f0]'>
            <FaLocationDot className='w-[23px] h-[23px]'  />
            </div>
            <p>Somewhere in the World</p>
          </div>
        </div>
      </div>
      <div className='flex justify-around w-full'>
        <div className='flex flex-col gap-[6px]'>
        <p className='text-[16px] font-bold text-black pb-[10px]'>home</p>
        <p >Features</p>
        <p>Our Testimonials</p>
        <p>FAQ</p>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <p className='text-[16px] font-bold text-black pb-[10px]'>About Us</p>
          <p>Our Mission</p>
          <p>Our Vission</p>
          <p>Awards and Recognitions</p>
          <p>History</p>
          <p>Teachers</p>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <p className='text-[16px] font-bold text-black pb-[10px]'>Academics</p>
          <p>Special Features</p>
          <p>Gallery</p>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <p className='text-[16px] font-bold text-black pb-[10px]'>Contact Us</p>
          <p>Information</p>
          <p>Map & Direction</p>
        </div>
      </div>
    </div>
    <div className='w-full h-[2px] bg-black my-[35px] '></div>
    <div className='flex justify-between'>
      <div className='flex gap-[20px] items-center '>
        <p className='text-[16px font-medium text-black]'>Terms of Service</p>
        <div className='w-[1px] h-[25px] bg-black'></div>
        <p className='text-[16px font-medium text-black]'>Privacy Policy</p>
        <div className='w-[1px] h-[25px] bg-black'></div>
        <p className='text-[16px font-medium text-black]'>Cookie Policy</p>
      </div>
      <div className='flex items-center gap-[12px]'>
        <div className='w-[48px] h-[48px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#fff5f0] '>
        <FaFacebook className='w-[24px] h-[24px]'/>
        </div>
        <div  className='w-[48px] h-[48px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#fff5f0]'>
        <FaTwitter className='w-[24px] h-[24px]' />
        </div>
        <div  className='w-[48px] h-[48px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#fff5f0]'>
        <FaLinkedin  className='w-[24px] h-[24px]'/>
        </div>
      </div>
    </div>
      <div className='w-full h-[2px] bg-black my-[30px] '></div>
      <p className='text-center pb-[10px]'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </div>
  )
}
