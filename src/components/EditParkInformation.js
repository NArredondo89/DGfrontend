import React, { useState } from 'react';

function EditParkInformation(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [holes, setHoles] = useState('');
  const [tees, setTees] = useState('');
  const [targets, setTargets] = useState('');
  const [property, setProperty] = useState('');
  const [services, setServices] = useState('');
  const [established, setEstablished] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Click');
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
              placeholder={props.course.name}
              className="form-control"
              id="parkName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label for="parkCity" className="parkCity">
              Park City
            </label>
            <input
              type="text"
              placeholder={props.course.location}
              className="form-control"
              id="ParkCity"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="courseHoles" className="courseHoles">
              Holes :
            </label>
            <input
              type="text"
              placeholder={props.course.holes}
              className="form-control"
              id="courseHoles"
              value={holes}
              onChange={(e) => setHoles(e.target.value)}
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
              placeholder={props.course.availability}
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
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
              placeholder={props.course.tees}
              value={tees}
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
              value={targets}
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
              placeholder={props.course.property}
              value={property}
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
              placeholder={props.course.services}
              value={services}
              onChange={(e) => setServices(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="established" className="established">
              Established :
            </label>
            <input
              type="text"
              placeholder={props.course.established}
              className="form-control"
              id="established"
              value={established}
              onChange={(e) => setEstablished(e.target.value)}
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
