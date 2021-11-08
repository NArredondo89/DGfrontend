import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  // console.log(props, 'card Item');
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to="#">
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
        </Link>
      </li>
    </>
  );
}

export default CardItem;
