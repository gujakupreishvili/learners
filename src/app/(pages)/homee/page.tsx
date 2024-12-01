import Header from '@/app/components/header/header'
import React from 'react'
import FirstSection from './firsrtSection/firstSection'
import Benefits from './benefits/benefits'
import Commentar from './commentar/commentar'


export default function Homee() {
  return (
    <div>
      <>
      <Header />
      <div className='flex flex-col mx-[45px]'>
      <FirstSection />
      <Benefits />
      <Commentar />
      </div>
      </>
    </div>
  )
}
