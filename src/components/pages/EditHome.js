import React from 'react';

function EditHome() {
  return (
    <>
      <div className="container xl mt-5">
        <form className="row g-3">
          <h1 className="parkInformations">Park Information</h1>
          <div className="col-md-6">
            <label for="parkName" className="parkName">
              Park Name
            </label>
            <input type="text" className="form-control" id="parkName" />
          </div>
          <div className="col-md-6">
            <label for="availibility" className="availibility">
              Park City
            </label>
            <input type="password" className="form-control" id="ParkCity" />
          </div>

          <div className="col-md-6">
            <label for="courseHoles" className="courseHoles">
              Holes :
            </label>
            <input type="text" className="form-control" id="courseHoles" />
          </div>

          <div className="col-md-6">
            <label for="availibility" className="availibility">
              Availibility :
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <div className="col-md-6">
            <label for="tees" className="tees">
              Tees :
            </label>
            <input type="password" className="form-control" id="tees" />
          </div>

          <div className="col-md-6">
            <label for="targets" className="targets">
              Targets :
            </label>
            <input type="password" className="form-control" id="targets" />
          </div>

          <div className="col-md-6">
            <label for="property" className="property">
              Property :
            </label>
            <input type="password" className="form-control" id="property" />
          </div>

          <div className="col-md-6">
            <label for="services" id="services">
              Services :
            </label>
            <input type="password" className="form-control" id="services" />
          </div>

          <div className="col-md-6">
            <label for="established" className="established">
              Established :
            </label>
            <input type="password" className="form-control" id="established" />
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

export default EditHome;
