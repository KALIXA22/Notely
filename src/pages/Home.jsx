import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from './About';
import Cards from '../components/Cards'
import Testimonials from './Testimonials';
import  SearchBar  from '../components/SearchBar';
import Footer  from '../components/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Cards/>
    <Testimonials/>
    <SearchBar/>
    <Footer/> 
    
    
    </>
  )
}

export default Home;
