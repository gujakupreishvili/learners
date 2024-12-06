"use client"
import Header from '@/app/components/header/header'
import React from 'react'
import FirstSection from './firsrtSection/firstSection'
import Benefits from './benefits/benefits'
import Question from './question/question'
import Navigate from './navigate/navigate'
import Footer from '@/app/components/footer/footer'
import Comment from './comment/comment'
import { motion, useScroll, useSpring } from "motion/react"


export default function Homee() {
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
      height:"10px",
      zIndex:100

     }}/>
    <div>
      <>
      <Header />
      <div className='flex flex-col mx-[45px] sm:mx-[20px]'>
      <FirstSection />
      <Benefits />
      <Comment />
      <Question />
      <Navigate />
      <Footer />
      </div>
      </>
    </div>
    </>
  )
}
