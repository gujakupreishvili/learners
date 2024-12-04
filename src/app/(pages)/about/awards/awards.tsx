"use client"
import React from 'react';
import { FaAward, FaTrophy, FaMedal, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import necessary icons
import awardJsonRaw from '../../../data/awards.json'; // Import raw JSON
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

// Define the structure of your JSON data
interface Award {
  icon: keyof typeof iconMap; // Restrict the type to the keys of iconMap
  name: string;
  description: string;
}

// Map icons to their respective names in the JSON
const iconMap = {
  FaAward,
  FaTrophy,
  FaMedal,
};

// Explicitly cast the JSON to the Award[] type
const awardJson = awardJsonRaw as Award[];

export default function Awards() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
          Our Achievements
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
          Our Awards and Recognitions
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
          Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding
          student experiences. We are honored to have received various awards and recognitions for our dedication to
          early childhood education. These accolades reflect our teams relentless efforts in creating an exceptional
          learning environment for our students.
        </p>
      </div>

      {/* Awards Section */}
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
      {awardJson.map((res, index) => {
        const IconComponent = iconMap[res.icon];
        return (
          <SwiperSlide key={index}>
            <div className='w-[400px] sm:w-full bg-white border-[2px] border-black rounded-[10px] px-[15px] mt-[55px] shadow-[4px_4px_0px_2px_#1e1e1e] h-[322px] mb-[20px]' >
              <div className="text-[28px] text-[#1a1a1a] mb-[16px] w-[56px] h-[56px] bg-[#ffdecc] flex justify-center items-center border-[2px] border-black rounded-[8px] mt-[-30px] z-10">
                {IconComponent ? <IconComponent /> : null}
              </div>
              <h4 className="text-[24px] font-bold text-[#1a1a1a] mb-[12px]">
                {res.name}
              </h4>
              <p className="text-[18px] text-[#333333]  leading-7">
                {res.description}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
      <div className='flex justify-between mt-[20px] mb-[50px]'>
        <p className='text-[18px] font-bold'>
       {awardJson.length}
       <span>More Awards</span>
        </p>
        <div className='flex  mr-[40px]'>
          <div 
          className='bg-white border-[2px] border-black rounded-[8px] w-[48px] h-[48px] flex items-center justify-center cursor-pointer sm:w-[190px] sm:ml-[8px] mr-[10px]'
          id='prev-btn'>
          <FaArrowLeft />
          </div>
          <div
          className='bg-white border-[2px] border-black rounded-[8px] w-[48px] h-[48px] flex items-center justify-center cursor-pointer sm:w-[190px] sm:ml-[8px]'
           id='next-btn'>
            <FaArrowRight />
          </div>
        </div>
      </div>

    </div>
  );
}