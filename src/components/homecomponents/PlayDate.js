import React from 'react';

import { Form, Button } from 'react-bootstrap';

import './PlayDate.css';

function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked Submit');
}

function PlayDate(props) {
  return (
    <>
      <div className="play__title__container">
        <h1>Playing The Course Today?</h1>
      </div>
      <div className="play__date__container">
        <div className="form__container">
          <div className="title__container">
            <h3 className="value">Want A Partner to Play With?</h3>
            <div className="div">
              Leave A Comment To See if Somebody Will Join You!
            </div>
          </div>
          <div className="play__date__form__container">
            <form className="review__form" onSubmit={handleSubmit}>
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
            <div className="title">Write A 5 Star Review!</div>
          </div>
          <form
            className="review__form"
            onsubmit="console.log('you Clicked the form')"
          >
            <div class="rating">
              {' '}
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>{' '}
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>{' '}
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>{' '}
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>{' '}
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>{' '}
            </div>

            <textarea
              id="review"
              name="review"
              defaultValue="Hey! I will be playing the course aurond 3:30pm if anybody would like to join!"
            ></textarea>
            <button clasName="play__button" type="submit">
              Submit
            </button>
          </form>
          <div className="review__post__container">
            {props.review.map((singleReview) => {
              return (
                <div className="single__review__post">
                  <div className="review__title">{singleReview.rating}</div>
                  <div className="review__content">{singleReview.comment}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayDate;
