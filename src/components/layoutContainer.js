import React from 'react';
import { NavLink } from 'react-router-dom';

import GoogleMapsContainer from '../components/GoogleMapContainer';

import './layoutContainer.css';

import { Container, Table, Col, Row } from 'react-bootstrap';

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
      <Container fluid className="layoutHero">
        <Row>
          <Col className="layoutTotals" sm={6} md={6} lg={6} xl={6}>
            <Container className="layoutInformation">
              <Row>
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
              </Row>
            </Container>
          </Col>
          <Col>
            <GoogleMapsContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LayoutContainer;
