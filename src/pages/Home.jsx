import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from './About';
import Cards from '../components/Cards'
import Testimonials from './Testimonials';
import  Searchcard  from '../components/Searchcard';

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Cards/>
    <Testimonials/>
    <Searchcard/> 
    </>
  )
}

export default Home;
