import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CourseInformation from '../CourseInformation';
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection />\
      <CourseInformation />
      <Cards />
    </>
  );
}

export default Home;
