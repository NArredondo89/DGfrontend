import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import './holeContainer.css';

function HoleContainer(props) {
  console.log(props.hole, 'Hole Container');
  return (
    <>
      <Container fluid className="holeContainer">
        <Row>
          <Col className="pictureContainer" sm={7}>
            <div className="holeimage">
              <img src="images/one.jpg" alt="" />
            </div>
          </Col>
          <Col className="informationContainer" sm={5}>
            <div className="holeTitle">Hole 1</div>
            <div className="holeInformation">
              <div className="par">Par: 3</div>
              <div className="feet">Feet : 225</div>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HoleContainer;
