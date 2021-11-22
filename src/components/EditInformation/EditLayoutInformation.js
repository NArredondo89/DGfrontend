import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LayoutModel from '../../models/layout';

import './EditLayoutInformation.css';

const EditLayoutInformation = (props) => {
  const layout = props.layout;

  const hole = props.layout.hole;

  const [title, setTitle] = useState(layout.title);
  const [totalFeet, setTotalFeet] = useState(layout.totalFeet);
  const [totalHoles, setTotalHoles] = useState(layout.totalHoles);
  const [totalPar, setTotalPar] = useState(layout.totalPar);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');

    LayoutModel.update(props.layout._id, {
      title,
      totalFeet,
      totalHoles,
      totalPar,
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
      <div className="edit__layout__title">
        <h1 className="layout__title">Layout Information</h1>
      </div>
      <div className="edit__layout__container">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="layout__information">
            <label for="parkName" className="parkName">
              Layout Title
            </label>
            <input
              type="text"
              className="form-control"
              id="parkName"
              defaultValue={props.layout.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="layout__information">
            <label for="parkCity" className="parkCity">
              Total Feet
            </label>
            <input
              type="text"
              defaultValue={props.layout.totalFeet}
              className="form-control"
              id="ParkCity"
              onChange={(e) => setTotalFeet(e.target.value)}
            />
          </div>

          <div className="layout__information">
            <label for="courseHoles" className="courseHoles">
              Total Holes
            </label>
            <input
              type="text"
              defaultValue={props.layout.totalHoles}
              className="form-control"
              id="layoutHoles"
              onChange={(e) => setTotalHoles(e.target.value)}
            />
          </div>

          <div className="layout__information">
            <label for="availibility" className="availibility">
              Total Par
            </label>
            <input
              type="text"
              className="form-control"
              id="totalPar"
              defaultValue={props.layout.totalPar}
              onChange={(e) => setTotalPar(e.target.value)}
            />
          </div>

          <div className="form__button"></div>
          <button type="submit" className="update__layout__button">
            Update Information
          </button>
        </form>
      </div>
    </>
  );
};

export default EditLayoutInformation;
