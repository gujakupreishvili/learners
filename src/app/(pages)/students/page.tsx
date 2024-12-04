import FirstSectionComp from '@/app/components/firstSection/firstSectionComp'
import Header from '@/app/components/header/header'
import React from 'react'
import framer from "../../../../public/assets/about/frame.png"
import Activities from './activites/activities'
import Selebration from './selebration/selebration'
import Support from './support/support'
import Footer from '@/app/components/footer/footer'


export default function Students() {
  return (
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
  )
}
