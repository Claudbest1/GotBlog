import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="">
      <Hero />
      <News />
      <CTA />
      <Footer/>
    </main>
  )
}

export default Home