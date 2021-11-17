import React, { useState, useEffect } from 'react';
import '../App.css';
import HeroSection from '../components/homecomponents/HeroSection';
import CourseInformation from '../components/homecomponents/CourseInformation';
import AdminSection from '../components/homecomponents/AdminSection';
import Cards from '../components/homecomponents/Cards';
import PlayDate from '../components/homecomponents/PlayDate';

import CourseModel from '../models/course';
import EventModel from '../models/event';
import ReviewModel from '../models/review';

function Home() {
  const [course, setCourse] = useState([]);
  const [event, setEvent] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(function () {
    fetchCourse();
    fetchEvent();
    fetchReviews();
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

  const fetchReviews = () => {
    ReviewModel.show().then((json) => {
      setReviews(json.Review);
    });
  };

  return (
    <>
      <HeroSection course={course} />
      <CourseInformation course={course} />
      <AdminSection />
      <Cards event={event} />
      <PlayDate review={reviews} />
    </>
  );
}

export default Home;
