import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CourseInformation from '../CourseInformation';
import Cards from '../Cards';

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
      console.log(json, 'json event');
      setEvent(json.Event);
      console.log(json.Event, 'json event');
    });
  };

  return (
    <>
      <HeroSection course={course} />
      <CourseInformation course={course} />
      <Cards event={Event} />
    </>
  );
}

export default Home;
