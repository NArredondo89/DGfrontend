import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CourseInformation from '../CourseInformation';
import Cards from '../Cards';

import CourseModel from '../models/course';

function Home() {
  const [course, setCourse] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(function () {
    fetchCourse();
  }, []);

  const fetchCourse = () => {
    CourseModel.show().then((json) => {
      //NOTE; // THIS NEEDS TO BE CAPATILIZED INORDER TO PULL THE DATA
      setCourse(json.Course[0]);
    });
  };

  // const chabotPark = course.map((singlecourse) => {
  //   console.log(chabotPark, 'home.js');
  // });

  return (
    <>
      <HeroSection course={course} />
      <CourseInformation course={course} />
      <Cards course={course} />
    </>
  );
}

export default Home;
