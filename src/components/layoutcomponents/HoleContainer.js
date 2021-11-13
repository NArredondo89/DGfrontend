import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './holeContainer.css';

function HoleContainer(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="pictureContainer" md={6} lg={6} xl={6}>
            <div className="holeimage">
              <img src="images/one.jpg" />
            </div>
          </Col>
          <Col className="informationContainer" md={6} lg={6} xl={6}>
            <div className="holeTitle">
              {props.hole._id}
              {props.hole.number}
            </div>
            <div className="holeInformation">
              <div className="par">{props.hole.number}</div>
              <div className="feet">{props.hole.feet}</div>
            </div>
            <div className="penality">
              <div className="mandoTitle">Mandatory:</div>
              <div className="penalityDes">
                <p>No Mandos</p>
              </div>
              <div className="ofbTitle">Out Of Bounds:</div>
              <div className="penalityDes">
                <p>
                  Road Plays as out of bounds. Fence on the back right hand side
                  is out of bounds
                </p>
              </div>
              <div className="dropzone">Drop Zone:</div>
              <div className="penalityDes">
                <p>
                  No Drop Zone. If you throw your disc out of bounds play the
                  nearest exit point
                </p>
              </div>
            </div>
            <Button variant="primary">Hole Video</Button>{' '}
            <Button variant="primary">ForeHand Throw</Button>{' '}
            <Button variant="primary">BackHand Throw</Button>{' '}
            <div>
              <Button variant="outline-primary">Previous Hole</Button>{' '}
              <Button variant="outline-primary">Next Hole</Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HoleContainer;
