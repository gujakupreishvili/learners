import Header from '@/app/components/header/header'
import React from 'react'
import FirstSection from './firsrtSection/firstSection'
import Benefits from './benefits/benefits'
import Commentar from './commentar/commentar'
import Question from './question/question'
import Navigate from './navigate/navigate'
import Footer from '@/app/components/footer/footer'


export default function Homee() {
  return (
    <div>
      <>
      <Header />
      <div className='flex flex-col mx-[45px]'>
      <FirstSection />
      <Benefits />
      <Commentar />
      <Question />
      <Navigate />
      <Footer />
      </div>
      </>
    </div>
  )
}
