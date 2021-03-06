import React from 'react';
import '../homecomponents/CourseInformation.css';
import ParkMap from './FrontPageMap';

const CourseInformation = (props) => {
  return (
    <>
      <div className="park__title__container">
        <h1>Park Information</h1>
      </div>
      <div className="CourseSection">
        <div className="CourseInformation">
          <main className="column">
            <p>Holes : {props.course.holes}</p>
            <p>Avaliability: {props.course.availability}</p>
            <p>Tees : {props.course.tees}</p>
            <p>Targets : {props.course.targets}</p>
            <p>Property : {props.course.property}</p>
            <p>Services : {props.course.services}</p>
            <p>Established : {props.course.established}</p>
          </main>
        </div>
        <section className="course__map">
          <ParkMap />
        </section>
      </div>
    </>
  );
};

export default CourseInformation;
