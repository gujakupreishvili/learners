"use client"
import FirstSectionComp from '@/app/components/firstSection/firstSectionComp'
import Header from '@/app/components/header/header'
import React from 'react'
import frame from "../../../../public/assets/about/frame.png"
import Input from './inputSection/input'
import Footer from '@/app/components/footer/footer'
import { motion, useScroll, useSpring } from "motion/react"

export default function Contact() {
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
        <FirstSectionComp buttontext='Contact Us' h1text='Feel Free To Connect With Us' imageSrc={frame} ptext="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods" />
        <Input />
        <Footer />
       </div>
    </div>
    
    </>
  )
}
