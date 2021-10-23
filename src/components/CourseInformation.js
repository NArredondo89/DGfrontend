import React from 'react';
import './CourseInformation.css';

function CourseInformation() {
  return (
    <>
      <div className="CourseSection">
        <div className="CourseInformation">
          <div className="row">
            <div className="column">
              <h2>Course Information</h2>
              <p>Holes : 9</p>
              <p>Avaliability: Year Round 7am-7pm</p>
              <p>Tees : Dirt</p>
              <p>Targets : Shitty Baskets</p>
              <p>Property : Mixed Use / Public Park</p>
              <p>Services : Dog Friendly, Cart Friendly</p>
              <p>Established : 1988</p>
            </div>
            <div className="column">
              <h2>Column 2</h2>
              <p>Google Maps API IMAge.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInformation;
