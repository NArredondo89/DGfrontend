import React from 'react';
import './EditHoleInformation.css';

import Table from 'react-bootstrap/Table';

const EditHoleInformation = (props) => {
  console.log(props.layout);
  return (
    <>
      <h1 className="frontNine">Front Nine</h1>
      <Table className="layoutTable " borderless="true" size="sm" responsive>
        <thead>
          <tr>
            <th>Hole #</th>
            {Array.from({ length: 9 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Feet</td>
            {Array.from({ length: 9 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Total Par</td>
            {Array.from({ length: 9 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <h1 className="frontNine">Back Nine</h1>
      <Table className="layoutTable" borderless="true" size="sm" responsive>
        <thead>
          <tr>
            <th>Hole #</th>
            {Array.from({ length: 9 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Feet</td>
            {Array.from({ length: 9 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Total Par</td>
            {Array.from({ length: 9 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default EditHoleInformation;
