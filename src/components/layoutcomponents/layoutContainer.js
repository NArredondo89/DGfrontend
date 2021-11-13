import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import HoleModel from '../models/hole';

import GoogleMapsContainer from '../layoutcomponents/GoogleMapContainer';

import './layoutContainer.css';

import { Container, Table, Col, Row, Button } from 'react-bootstrap';

function LayoutContainer(props) {
  const [hole, setHole] = useState('');
  // console.log(props.hole, 'Hole Container');

  let frontNineNumber = props.hole.slice(0, 9).map((singlehole) => {
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
      <Container fluid className="layoutHero">
        <Row>
          <Col className="layoutTotals" lg={6} xl={6}>
            <Container className="layoutInformation">
              <Col className="totalContainer">
                <Container>
                  <Row className="titleWrapper">
                    <Col>
                      <h2 className="layoutTitle">{props.layout.title}</h2>
                    </Col>
                  </Row>
                  <Row className="row">
                    <Col className="totalWrapper">
                      <div className="title">Total Holes</div>
                      <div className="value">{props.layout.totalHoles}</div>
                    </Col>
                    <Col className="totalWrapper">
                      <div className="title">Total Feet</div>
                      <div className="value">{props.layout.totalFeet}</div>
                    </Col>
                    <Col className="totalWrapper">
                      <div className="title">Total Par</div>
                      <div className="value">{props.layout.totalPar}</div>
                    </Col>
                  </Row>
                  <div className="tableContainer">
                    <h4>Front Nine</h4>
                    <Table className="holeTable" responsive="lg">
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
                    <h4>Back Nine</h4>
                    <Table responsive="lg">
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
                  </div>
                </Container>
              </Col>
            </Container>
          </Col>
          <Col lg={6} xl={6}>
            <GoogleMapsContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LayoutContainer;
