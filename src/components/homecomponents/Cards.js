import React, { useState } from 'react';

import CardItem from './CardItem';

import './Cards.css';

function Cards(props) {
  return (
    <>
      <div className="card__title">
        <h1>Tournaments and Announcements</h1>
      </div>
      <div className="cards">
        {props.event.map((singleEvent) => {
          return (
            <div>
              <div className="cards__container">
                <div className="cards__wrapper">
                  <ul className="cards__items">
                    {props.event ? (
                      <CardItem event={singleEvent} />
                    ) : (
                      <div>Loading...</div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
