import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
  return (
    <main className="">
      <HeroSlider />
      <News />
      <CTA />
      <Footer/>
    </main>
  )
}

export default Home