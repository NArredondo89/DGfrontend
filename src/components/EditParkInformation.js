import React, { useState } from 'react';

import CourseModel from './models/course';

function EditParkInformation(props) {
  const [name, setName] = useState(props.course.name);
  const [location, setLocation] = useState(props.course.location);
  const [availability, setAvailability] = useState(props.course.availability);
  const [holes, setHoles] = useState(props.course.holes);
  const [tees, setTees] = useState(props.course.tees);
  const [targets, setTargets] = useState(props.course.targets);
  const [property, setProperty] = useState(props.course.property);
  const [services, setServices] = useState(props.course.services);
  const [established, setEstablished] = useState(props.course.established);

  console.log(props.course, 'editPark');

  function handleSubmit(e) {
    e.preventDefault();

    CourseModel.update(props.course._id, {
      name,
      location,
      availability,
      holes,
      tees,
      targets,
      property,
      services,
      established,
    }).then((json) => {
      if (json.status === 500) {
        console.log('still not right');
      }
      if (json.status === 200) {
        console.log(json);
      }
    });
  }

  return (
    <>
      <div className="container xl mt-5">
        <form onSubmit={handleSubmit} className="row g-3">
          <h1 className="parkInformations">Park Information</h1>
          <div className="col-md-6">
            <label for="parkName" className="parkName">
              Park Name
            </label>
            <input
              type="text"
              className="form-control"
              id="parkName"
              defaultValue={props.course.name}
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
              defaultValue={props.course.location}
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
              defaultValue={props.course.holes}
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
              defaultValue={props.course.availability}
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
              defaultValue={props.course.tees}
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
              defaultValue={props.course.targets}
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
              defaultValue={props.course.property}
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
              defaultValue={props.course.services}
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
              defaultValue={props.course.established}
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
