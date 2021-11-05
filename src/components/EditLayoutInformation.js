import React, { useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';

const EditLayoutInformation = (props) => {
  const [title, setTitle] = useState('');
  const [totalFeet, setTotalFeet] = useState('');
  const [totalHoles, setTotalHoles] = useState('');
  const [totalPar, setTotalPar] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Click');
  };

  return (
    <>
      <div className="container xl mt-5">
        <h1 className="parkInformations">Layout Information</h1>
        <Dropdown className="mb-5">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose Layout to Edit
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Layout 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Layout 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Layout 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <form onSubmit={submitHandler} className="row g-3">
          <div className="col-md-6">
            <label for="parkName" className="parkName">
              Layout Title
            </label>
            <input
              type="text"
              placeholder={props.layout.title}
              className="form-control"
              id="parkName"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label for="parkCity" className="parkCity">
              Total Feet
            </label>
            <input
              type="text"
              placeholder={props.layout.totalFeet}
              className="form-control"
              id="ParkCity"
              value={totalFeet}
              onChange={(e) => setTotalFeet(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="courseHoles" className="courseHoles">
              Total Holes
            </label>
            <input
              type="text"
              placeholder={props.layout.totalHoles}
              className="form-control"
              id="layoutHoles"
              value={totalHoles}
              onChange={(e) => setTotalHoles(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label for="availibility" className="availibility">
              Total Par
            </label>
            <input
              type="text"
              className="form-control"
              id="totalPar"
              placeholder={props.layout.totalPar}
              value={totalPar}
              onChange={(e) => setTotalPar(e.target.value)}
            />
          </div>

          <h1 className="frontNine">Front Nine</h1>
          <Table className="layoutTable " size="sm" responsive>
            <thead>
              <tr>
                <th>Hole #</th>
                {Array.from({ length: 9 }).map((_, index) => (
                  <th key={index}>Num</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Feet</td>
                {Array.from({ length: 9 }).map((_, index) => (
                  <td key={index}>Feet </td>
                ))}
              </tr>
              <tr>
                <td>Total Par</td>
                {Array.from({ length: 9 }).map((_, index) => (
                  <td key={index}>Par</td>
                ))}
              </tr>
            </tbody>
          </Table>
          <h1 className="frontNine">Back Nine</h1>
          <Table className="layoutTable" size="sm" responsive>
            <thead>
              <tr>
                <th>Hole #</th>
                {Array.from({ length: 9 }).map((_, index) => (
                  <th key={index}>Num</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Feet</td>
                {Array.from({ length: 9 }).map((_, index) => (
                  <td key={index}>Feet</td>
                ))}
              </tr>
              <tr>
                <td>Total Par</td>
                {Array.from({ length: 9 }).map((_, index) => (
                  <td key={index}>Par</td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update Layout Information
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditLayoutInformation;
