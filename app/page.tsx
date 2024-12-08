import React from 'react';
// import Header from '@/components/Header/Header';
import Hero from '@/components/HeroSection/Hero';
import About from '@/components/HeroSection/About';
import Food from '@/components/HeroSection/Food';
// import Footer from '@/components/Footer/Footer';
import News from '@/components/HeroSection/News';
import Add from '@/components/HeroSection/Add';
import Testimonial from '@/components/HeroSection/Testimonial';
import Chef from '@/components/HeroSection/Chef';
import Menu from '@/components/HeroSection/Menu';
import Service from '@/components/HeroSection/Service';
import Experienced from '@/components/HeroSection/Experienced';

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Food />
      <Service />
      <Menu />
      <Chef />
      <Experienced />
      <Testimonial />
      <Add />
      <News />
      {/* <Footer /> */}
    </div>
  )
}

export default page
