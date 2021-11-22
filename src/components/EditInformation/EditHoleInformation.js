import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HoleModel from '../../models/hole';

import './EditHoleInformation.css';

const EditHoleInformation = (props) => {
  console.log(props, 'edit Hole Page');

  const [feet, setFeet] = useState(props.hole.feet);
  const [par, setPar] = useState(props.hole.feet);
  const [outOfBounds, setOutOfBounds] = useState(props.hole.feets);
  const [mandatory, setMandatory] = useState(props.hole.mandatory);
  const [hazzard, setHazzard] = useState(props.hole.hazzard);
  const [picture, setPicture] = useState(props.hole.picture);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');

    HoleModel.update(props.hole._id, {
      feet,
      par,
      outOfBounds,
      mandatory,
      hazzard,
      picture,
    }).then((json) => {
      if (json.status === 500) {
        console.log('still not right');
      }
      if (json.status === 200) {
        console.log(json);
      }
      navigate('/');
    });
  };

  return (
    <>
      <div className="edit__hole__container">
        <form onSubmit={handleSubmit}>
          {props?.hole.map((singleHole) => {
            return (
              <div className="edit__hole__wrapper">
                <label
                  for="edit__hole__number"
                  className="edit__hole__number"
                  key={singleHole._id}
                >
                  Number {singleHole.number}
                </label>
                <br></br>
                <label
                  for="edit__hole__feet"
                  className="form-control"
                  key={singleHole.feet}
                >
                  Feet :
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={singleHole.feet}
                  onChange={(e) => setFeet(e.target.value)}
                />
                <br></br>
                <label
                  for="hole__par"
                  className="form-control"
                  key={singleHole.par}
                >
                  Par :
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={singleHole.par}
                  onChange={(e) => setPar(e.target.value)}
                />
                <br></br>
                <label
                  for="hole__outofBounds"
                  className="form-control"
                  key={singleHole.outofBounds}
                >
                  Out of Bounds :
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  defaultValue={singleHole.outOfBounds}
                  onChange={(e) => setOutOfBounds(e.target.value)}
                />
                <br></br>
                <label
                  for="hole__mandatory"
                  className="form-control"
                  key={singleHole.mandatory}
                >
                  Mandatory :
                </label>
                <textarea
                  type="text-area"
                  className="form-control"
                  defaultValue={singleHole.mandatory}
                  onChange={(e) => setMandatory(e.target.value)}
                />
                <br></br>
                <label
                  for="hole__hazzard"
                  className="form-control"
                  key={singleHole.hazzard}
                >
                  Hazzard :
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  defaultValue={singleHole.hazzard}
                  onChange={(e) => setHazzard(e.target.value)}
                />
                <br></br>
                <label
                  for="hole__picture"
                  className="form-control"
                  key={singleHole.picture}
                >
                  Picture :
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={singleHole.picture}
                  onChange={(e) => setPicture(e.target.value)}
                />
                <button type="submit" className="update__layout__button">
                  Update Information
                </button>
                ;
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default EditHoleInformation;
