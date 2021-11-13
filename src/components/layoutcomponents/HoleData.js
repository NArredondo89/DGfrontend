import React from 'react';

import './HoleData.css';

function HoleDataSection() {
  return (
    <>
      <div className="hole__container">
        <div className="hole__information__container">
          <div className="hole__info__container">
            <div className="hole__number__container">
              <div className="hole__number">Hole 1</div>
            </div>
          </div>
          <div className="hole__spec__container">
            <div className="hole__feet">
              <div className="title">Feet</div>
              <div className="value"></div>
            </div>
            <div className="hole__par">
              <div className="title">Par</div>
              <div className="value"></div>
            </div>
          </div>
          <div className="rules__container"></div>
        </div>
        <div className="hole_photo__container">Right</div>
      </div>
    </>
  );
}
export default HoleDataSection;
