import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from './About';
import Cards from '../components/Cards'

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Cards/>
    </>
  )
}

export default Home;
