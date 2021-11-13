import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../homecomponents/HeroSection';
import CourseInformation from '../homecomponents/CourseInformation';
import Cards from '../homecomponents/Cards';

import CourseModel from '../models/course';
import EventModel from '../models/event';

function Home() {
  const [course, setCourse] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(function () {
    fetchCourse();
    fetchEvent();
  }, []);

  const fetchCourse = () => {
    CourseModel.show().then((json) => {
      setCourse(json.Course[0]);
    });
  };

  const fetchEvent = () => {
    EventModel.show().then((json) => {
      setEvent(json.Event);
    });
  };

  return (
    <>
      <HeroSection course={course} />
      <CourseInformation course={course} />
      <Cards event={event} />
    </>
  );
}

export default Home;
