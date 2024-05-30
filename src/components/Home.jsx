import React from 'react'
import Hero from './Hero'
import Strategies from './Strategies'
import About from './About'
import SlidePage from './SlidePage'
import Banner from './Banner'
import FAQ from './FAQ'
import Contact from './Contact'
import Calendal from './Calendal'

function Home() {
  return (
    <>
    <Calendal/>
      <Hero/>
      <Strategies/>
      <About/>
      <SlidePage/>
      <Banner/>
      <FAQ/>
      <Contact/>
      
    </>
  )
}

export default Home