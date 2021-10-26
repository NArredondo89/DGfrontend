import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CourseInformation from '../CourseInformation';
import Cards from '../Cards';

import CourseModel from '../models/course';

function Home() {
  const [course, setCourse] = useState([]);

  useEffect(function () {
    fetchCourse();
  }, []);

  const fetchCourse = (props) => {
    CourseModel.show().then((json) => {
      setCourse(json.course);
    });
  };

  return (
    <>
      <HeroSection course={course} />
      <CourseInformation course={course} />
      <Cards course={course} />
    </>
  );
}

export default Home;
