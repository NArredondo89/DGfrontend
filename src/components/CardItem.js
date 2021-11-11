import React, { useState } from 'react';

import { Modal, Button, fullscreen } from 'react-bootstrap';

function CardItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" onClick={handleShow}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h1>{props.title}</h1>
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Chabot Park Weekly</Modal.Title>
        </Modal.Header>
        <Modal.Body>Contact : Jordan Goldberg</Modal.Body>
        <Modal.Body>Day of the Week : Saturday-Sunday</Modal.Body>
        <Modal.Body>Play Format : Singles</Modal.Body>
        <Modal.Body>
          <p>Description:</p>
          <ul>
            <li>
              Please Check-in on UDisc Events\nPlease pay before you start your
              round Entry Fee to: @Jordan-Goldberg-20
            </li>
            <li>
              Our goal is to protect everyone, by going paperless. Thanks to
              UDisc! You will be able to keep track of your scores and watch
              live scores.
            </li>
            <li>
              The Weekly entry fee is $5. $4 goes to the week's payout, and $1
              goes to the Ace Pot. You must have an established handicap (2
              previously recorded weeklies) to be eligible for payout. Players
              without a handicap can enter the ace pot but the cost is still $5.
            </li>
            <li>
              UDisc Check-in: https://www.udisc.com/\n\nTo play the weekly, YOU
              MUST HAVE A UDISC PROFILE. If you do not already have a UDisc
              account and do not want to download the app yourself, you can have
              a cardmate check you in with your First and Last names and email
              address. This process will create a profile for you. **USE THE
              SAME FIRST AND LAST NAME AS USED FOR PREVIOUS WEEKLIES. PROPER
              CAPITALIZATION PLEASE.
            </li>
            <li>
              {' '}
              Create a Scorecard: Find the the "Chabot Park Saturday Weekly"
              league on the "Events" tab in UDisc. Tap "Check-in". When checking
              in, use the same first and last name that you've previously used
              in Chabot Park Saturday Weekly tournaments.Groups must have at
              least 3 players to a card, but not more than Please try to create
              groups of exactly 4 when possible.
            </li>
            <li>
              {' '}
              Follow all current rules of the course that are posted at Hole 1's
              teepad and throughout the course.\n\n**One and only one person in
              each group** needs to create the scorecard for the group. Once all
              players in a group are checked in, scorecards can be created using
              the Create Scorecard button.
            </li>
            <li>
              {' '}
              Once the scorecard is created for the group, anyone in the group
              can also keep score or follow along on their own phone.\n\nIf a
              player needs to be added to or removed from the scorecard after
              it's been created, use the menu button in the top right corner of
              the scorecard and choose "Add / Remove Player".**Please note that
              all changes to scorecards are tracked**
            </li>
            <li>
              Upon completion of your round, everyone in the group should double
              check their score. Once this is done, the person with the live
              scorecard should tap \"Finish Round\" then \"Finalize\" to submit
              your score to the TD(s).\n\nThank you for understanding the rules
              and doing your part to keep everyone safe."
            </li>
            <li>Good luck and have fun.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardItem;
