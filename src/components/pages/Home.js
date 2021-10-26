import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CourseInformation from '../CourseInformation';
import Cards from '../Cards';

import CourseModel from '../models/course';

function Home(props) {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    fetchCourse();
  }, []);

  const fetchCourse = (props) => {
    CourseModel.show().then((json) => {
      console.log(json);
      setCourse(json.course);
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
