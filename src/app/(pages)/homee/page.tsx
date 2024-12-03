import Header from '@/app/components/header/header'
import React from 'react'
import FirstSection from './firsrtSection/firstSection'
import Benefits from './benefits/benefits'
import Question from './question/question'
import Navigate from './navigate/navigate'
import Footer from '@/app/components/footer/footer'
import Comment from './comment/comment'


export default function Homee() {
  return (
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
  )
}
