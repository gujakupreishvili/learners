import React from 'react'
import cubs from "../../../../../public/assets/about/cubs.png"
import Image from 'next/image'

export default function History() {
  return (
    <div className='bg-[white] py-[70px] px-[90px]  flex flex-col gap-[70px] border-[2px] border-black rounded-[12px] shadow-[6px_6px_0px_2px_#1e1e1e] mb-[50px]'>
      <div className='flex gap-[150px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2023</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px]'>
          <p className='text-[28px] font-bold'>Resilience and Future Horizons</p>
          <p>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
        </div>
      </div>

      <div className='flex gap-[150px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2017</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px]'>
          <p className='text-[28px] font-bold'>Innovation and Technology</p>
          <p>Innovation became the driving force behind our kindergartens progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
        </div>
      </div>

      <div className='flex gap-[150px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2012</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px]'>
          <p className='text-[28px] font-bold'>Expansion and Recognition</p>
          <p>These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
        </div> 
      </div>

      <div className='flex gap-[150px]'>
        <div className='bg-white flex items-center justify-between gap-[20px] px-[28px]  py-[28px] w-[295px] border-[2px] border-black rounded-[12px] shadow-[4px_4px_0px_2px_#1e1e1e]'>
          <Image  src={cubs} alt='cubs' className='w-[60px] h-[60px]'/>
          <h1 className='text-[48px] '>2005</h1>
        </div>
        <div className='flex flex-col gap-[20px] w-[708px]'>
          <p className='text-[28px] font-bold'>Inception and Growth</p>
          <p>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth. </p>
        </div>
      </div>
    </div>
  )
}
