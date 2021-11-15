import React from 'react';

import './HoleData.css';

function HoleDataSection({ hole, setNextHole, setPreviousHole }) {
  return (
    <>
      <div className="hole__container">
        <div className="hole__information__container">
          <div className="hole__info__container">
            <div className="hole__number__container">
              <div className="hole__number">Hole {hole?.number}</div>
            </div>
          </div>
          <div className="hole__spec__container">
            <div className="hole__feet">
              <div className="title">Feet</div>
              <div className="value">{hole?.feet}</div>
            </div>
            <div className="hole__par">
              <div className="title">Par</div>
              <div className="value">{hole?.par}</div>
            </div>
          </div>
          <div className="rules__container">
            <div className="out__of__bounds__container">
              <div className="out__of__bounds__title">Out Of Bounds:</div>
              <div className="out__of__bounds__value">{hole?.outOfBounds}</div>
            </div>
            <div className="hazzard__container">
              <div className="out__of__bounds__title">Hazzard:</div>
              <div className="out__of__bounds__value">{hole?.hazzards}</div>
            </div>
            <div className="mandatory__container">
              <div className="out__of__bounds__title">Mandatory:</div>
              <div className="out__of__bounds__value">{hole?.mandatory}</div>
            </div>
            <div className="dropzone__container">
              <div className="out__of__bounds__title">Drop Zone:</div>
              <div className="out__of__bounds__value">{hole?.hazzards}</div>
            </div>
          </div>
          <div className="video__buttons__container">
            <button type="submit" className="video__hole">
              <div>Hole {hole?.number} Video</div>
            </button>
            <button type="submit" className="video__forehand__route">
              <div>Forehand Route</div>
            </button>
            <button type="submit" className="video__backhand__route">
              <div>Backhand Route</div>
            </button>
          </div>
          <div className="control__control__container">
            <button
              onClick={() => setPreviousHole(Number(hole?.number) - 1)}
              type="submit"
              className="video__previous__hole"
            >
              <div>Previous Hole</div>
            </button>
            <button
              onClick={() => setNextHole(Number(hole?.number) + 1)}
              type="submit"
              className="video__next__hole"
            >
              <div>Next Hole</div>
            </button>
          </div>
        </div>
        <div className="hole_photo__container">
          <div className="photo__container">
            <img src={hole?.picture} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HoleDataSection;
