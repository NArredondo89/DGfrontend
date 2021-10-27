import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseInformation.css';
import ParkMap from '../FrontPageMap';

const CourseInformation = (props) => {
  const [course, setCourse] = useState([{}]);

  return (
    <>
      <div className="CourseSection">
        <div className="CourseInformation">
          <div className="row">
            <div className="column">
              <h2 className="mb-5">Information</h2>
              <p>Holes : {props.course.holes}</p>
              <p>Avaliability: {props.course.availability}</p>
              <p>Tees : {props.course.tees}</p>
              <p>Targets : Shitty Baskets</p>
              <p>Property : {props.course.property}</p>
              <p>Services : {props.course.services}</p>
              <p>Established : {props.course.established}</p>
              <Link to="/edit">
                <button className="btn btn-secondary">Edit</button>
              </Link>
            </div>

            <div className="column">
              <h2 className="mb-3">Location</h2>
              <ParkMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInformation;
