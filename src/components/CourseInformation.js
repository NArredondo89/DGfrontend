import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CourseInformation.css';
import ParkMap from '../FrontPageMap';

const CourseInformation = (props) => {
  return (
    <>
      <div className="CourseSection">
        <div className="CourseInformation">
          <div className="row">
            <div className="column">
              <div className="infoTitle mb-5">Information</div>
              <p>Holes : {props.course.holes}</p>
              <p>Avaliability: {props.course.availability}</p>
              <p>Tees : {props.course.tees}</p>
              <p>Targets : {props.course.targets}</p>
              <p>Property : {props.course.property}</p>
              <p>Services : {props.course.services}</p>
              <p>Established : {props.course.established}</p>
            </div>
            <div className="column">
              <ParkMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInformation;
