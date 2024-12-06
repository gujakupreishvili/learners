"use client"
import Header from '@/app/components/header/header'
import React from 'react'
import FirstSectionComp from '@/app/components/firstSection/firstSectionComp'
import frame from "../../../../public/assets/about/frame.png"
import Mission from './mission/mission'
import Awards from './awards/awards'
import History from './history/history'
import Team from './team/team'
import Footer from '@/app/components/footer/footer'
import { motion, useScroll, useSpring } from "motion/react"

export default function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
       <motion.div style={{ 
      scaleX,
      transformOrigin:"left",
      background:"#FF8D4D",
      position:"sticky",
      top:0,
      width:"100%",
      height:"10px"
     }}/>
    <div>
      <Header />
      <div className='flex flex-col mx-[45px] sm:mx-[20px]'>
       <FirstSectionComp buttontext='Overview' h1text='Welcome to Little Learners Academy' imageSrc={frame} ptext='A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.'/>
       <Mission />
       <Awards />
       <History />
       <Team />
       <Footer />
      </div>
    </div>
    </>
  )
}
