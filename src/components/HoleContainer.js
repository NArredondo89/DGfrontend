import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './holeContainer.css';

function HoleContainer(props) {
  console.log(props.hole, 'Hole Container');
  return (
    <>
      <Container fluid className="holeContainer">
        <Row>
          <Col className="pictureContainer" sm={8}>
            <div className="holeimage">
              <img src="images/one.jpg" alt="" />
            </div>
          </Col>
          <Col className="informationContainer" sm={4}>
            This is where the Hole information is going to go
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HoleContainer;
