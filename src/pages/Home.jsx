import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import News from '../components/News'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

   // Function to handle scrolling and show/hide the arrow
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

   // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top when the arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <HeroSlider />
      <News />
      <div className='flex w-full h-[50px] text-blue align-middle justify-end pr-[32px] relative' onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className='text-[40px] absolute hover:bg-deepblue' aria-hidden="true"/>
      </div>
      <CTA />
      <Footer />
      
    </main>
  )
}

export default Home