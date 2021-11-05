import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './layoutContainer.css';
import { Container, Table, Card, CardGroup, Stack, Row } from 'react-bootstrap';

function LayoutContainer(props) {
  let frontNineNumber = props.hole.slice(0, 9).map((singlehole) => {
    console.log(singlehole, 'show page table');
    return (
      <td>
        <NavLink to={`/layout/${singlehole._id}`}>{singlehole.number}</NavLink>
      </td>
    );
  });

  let frontNineFeet = props.hole.slice(0, 9).map((singlehole) => {
    return <td>{singlehole.feet}</td>;
  });

  let frontNinePar = props.hole.slice(0, 9).map((singlehole) => {
    return <td>{singlehole.par}</td>;
  });

  let backNineNumber = props.hole.slice(9, 18).map((singlehole) => {
    console.log(singlehole, 'show page table');
    return (
      <td>
        <NavLink to={`/layout/${singlehole._id}`}>{singlehole.number}</NavLink>
      </td>
    );
  });

  let backNineFeet = props.hole.slice(9, 18).map((singlehole) => {
    return <td>{singlehole.feet}</td>;
  });

  let backNinePar = props.hole.slice(9, 18).map((singlehole) => {
    return <td>{singlehole.par}</td>;
  });

  return (
    <>
      <Container className="layoutInformation">
        <Row>
          <div className="titleContainer">
            <h2 className="layoutTitle">{props.layout.title}</h2>
          </div>
          <div className="totalcontainer">
            <Stack direction="horizontal">
              <CardGroup>
                <Card border="light">
                  <Card.Body>
                    <Card.Title className="text-center"> Total Feet</Card.Title>
                    <Card.Text>{props.layout.totalFeet}</Card.Text>
                  </Card.Body>
                </Card>
                <Card border="light">
                  <Card.Body>
                    <Card.Title className="text-center">Total Holes</Card.Title>
                    <Card.Text>{props.layout.totalHoles}</Card.Text>
                  </Card.Body>
                </Card>
                <Card border="light">
                  <Card.Body>
                    <Card.Title className="text-center">Total Pars</Card.Title>
                    <Card.Text>{props.layout.totalPar}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Stack>
          </div>
          <Container>
            <h1>Front Nine</h1>
            <Table>
              <thead>
                <tr>
                  <th>Number</th>
                  {frontNineNumber}
                </tr>
                <tr>
                  <th>Feet</th>
                  {frontNineFeet}
                </tr>
                <tr>
                  <th>Par</th>
                  {frontNinePar}
                </tr>
              </thead>
            </Table>
            <h1>Back Nine</h1>
            <Table>
              <thead>
                <tr>
                  <th>Number</th>
                  {backNineNumber}
                </tr>
                <tr>
                  <th>Feet</th>
                  {backNineFeet}
                </tr>
                <tr>
                  <th>Par</th>
                  {backNinePar}
                </tr>
              </thead>
            </Table>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default LayoutContainer;
