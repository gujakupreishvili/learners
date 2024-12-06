"use client"
import FirstSectionComp from '@/app/components/firstSection/firstSectionComp'
import Header from '@/app/components/header/header'
import React from 'react'
import framer from "../../../../public/assets/about/frame.png"
import Activities from './activites/activities'
import Selebration from './selebration/selebration'
import Support from './support/support'
import Footer from '@/app/components/footer/footer'
import { motion, useScroll, useSpring } from "motion/react"


export default function Students() {
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
      <FirstSectionComp buttontext='Overview' h1text='Welcome to Little Learners Academy' imageSrc={framer}  ptext='Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child development.'/>
      <Activities />
      <Selebration />
      <Support />
      <Footer />
     </div>
    </div>
    </>
  )
}
