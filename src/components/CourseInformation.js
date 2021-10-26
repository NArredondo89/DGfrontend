import React, { useState } from 'react';
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
              <p>Holes : 9</p>
              <p>Avaliability: Year Round 7am-7pm</p>
              <p>Tees : Dirt</p>
              <p>Targets : Shitty Baskets</p>
              <p>Property : Mixed Use / Public Park</p>
              <p>Services : Dog Friendly, Cart Friendly</p>
              <p>Established : 1988</p>
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
