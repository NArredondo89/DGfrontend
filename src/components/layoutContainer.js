import React from 'react';
import { Container, Table, Card, Button, CardGroup } from 'react-bootstrap';

function LayoutContainer(props) {
  console.log(props);
  return (
    <>
      <aside>
        <h4 className="mt-5 ">{props.layout.tite}</h4>
        <CardGroup className="m-5">
          <Card>
            <Card.Body>
              <Card.Title className="text-center  ">Total Feet</Card.Title>
              <Card.Text>{props.layout.totalFeet}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Total Holes</Card.Title>
              <Card.Text>{props.layout.totalHoles}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Total Pars</Card.Title>
              <Card.Text>{props.layout.totalPar}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* <h1 className="frontNine">Front Nine</h1> */}
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
        {/* <h1 className="frontNine">Back Nine</h1> */}
        <Table className="layoutTable mt-5" size="sm" responsive>
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
      </aside>
    </>
  );
}

// export default LayoutContainer;
