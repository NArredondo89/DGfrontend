import React, { useState } from 'react';

function EditParkInformation(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [availibility, setAvailibility] = useState('');
  const [hole, setHole] = useState('');
  const [tees, setTees] = useState('');
  const [targets, setTargets] = useState('');
  const [property, setProperty] = useState('');
  const [services, setServices] = useState('');
  const [established, setEstablished] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <>
      <div className="container xl mt-5">
        <form onSubmit={submitHandler} className="row g-3">
          <h1 className="parkInformations">Park Information</h1>
          <div className="col-md-6">
            <label for="parkName" className="parkName">
              Park Name
            </label>
            <input
              type="text"
              className="form-control"
              id="parkName"
              value={props.course.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label for="parkCity" className="parkCity">
              Park City
            </label>
            <input
              type="text"
              className="form-control"
              id="ParkCity"
              value={props.course.location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="courseHoles" className="courseHoles">
              Holes :
            </label>
            <input
              type="text"
              className="form-control"
              id="courseHoles"
              value={props.course.holes}
              onChange={(e) => setHole(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="availibility" className="availibility">
              Availibility :
            </label>
            <input
              type="text"
              className="form-control"
              id="availibility"
              value={props.course.availability}
              onChange={(e) => setAvailibility(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="tees" className="tees">
              Tees :
            </label>
            <input
              type="text"
              className="form-control"
              id="tees"
              value={props.course.tees}
              onChange={(e) => setTees(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="targets" className="targets">
              Targets :
            </label>
            <input
              type="text"
              className="form-control"
              id="targets"
              value="Old baskets"
              onChange={(e) => setTargets(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="property" className="property">
              Property :
            </label>
            <input
              type="text"
              className="form-control"
              id="property"
              value={props.course.property}
              onChange={(e) => setProperty(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="services" id="services">
              Services :
            </label>
            <input
              type="text"
              className="form-control"
              id="services"
              value={props.course.services}
              onChange={(e) => setServices(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="established" className="established">
              Established :
            </label>
            <input
              type="text"
              className="form-control"
              id="established"
              onChange={(e) => setEstablished(e.target.value)}
              value={props.course.established}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update Course Information
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditParkInformation;
