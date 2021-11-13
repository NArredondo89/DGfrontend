import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

import { Modal, Button } from 'react-bootstrap';

function CardItem(props) {
  const eventDescriptions = props.event.description.map((singleEvent) => {
    return <ul>{singleEvent}</ul>;
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" onClick={handleShow}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.event.label}
          >
            <img
              className="cards__item__img"
              src="./hole/dg-1"
              src={props.event.eventPhoto}
            />
          </figure>
          <div className="cards__item__info">
            <h1>{props.event.title}</h1>
            <h5 className="cards__item__text">
              {props.event.smallDescription}
            </h5>
          </div>
        </a>
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.event.contact}</Modal.Body>
        <Modal.Body>{props.event.dayOfWeek}</Modal.Body>
        <Modal.Body>{props.event.playFormat}</Modal.Body>
        <Modal.Body>{eventDescriptions}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardItem;
