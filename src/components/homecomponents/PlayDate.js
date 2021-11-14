import React from 'react';

import { Form, Button } from 'react-bootstrap';

import './PlayDate.css';

function PlayDate() {
  return (
    <>
      <div className="play__date__container">
        <div className="form__container">
          <div className="title__container">
            <div className="title">
              Playing The Course Today?
              <div className="value">
                Write a comment to see if anybody is playing at the same time!{' '}
              </div>
            </div>
          </div>
          <div className="play__date__form__container">
            <form>
              <textarea
                id="play__comment"
                name="play__comment"
                defaultValue="Hey! I will be playing the course aurond 3:30pm if anybody would like to join!"
              ></textarea>
              <button clasName="play__button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="review__container">
          {' '}
          <div className="title__container">
            <div className="title">Reviews</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayDate;
