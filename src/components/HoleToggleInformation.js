import React from 'react';
import { Nav } from 'react-bootstrap';
import './HoleToggleInformation.css';

const HoleToggleInformation = () => {
  return (
    <>
      <div className="navcontainer">
        <Nav
          variant="tabs"
          defaultActiveKey=""
          className="justify-content-center"
          id="holeContent"
        >
          <Nav.Item>
            <Nav.Link href="/home">Tee Pad View</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Hole Video</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Backhand Throw</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Forehand Throw</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default HoleToggleInformation;
