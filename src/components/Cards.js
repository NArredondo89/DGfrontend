import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  return (
    <div className="cards">
      <h1>Events And Announcements</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/dg1.jpg"
              title="Saturday Weekly Tournament"
              text="This Tournament is handicapped. Players who have not established will need to play 2 seperate weeks in orders to obtain their handicap "
              label="Handicap Round"
              path="/layout"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/dg3.jpg"
              title="Thursday Doubles"
              text="All levels welcome! This will be a partner tournament"
              label="Best Throw"
              path="/layout"
            />
            <CardItem
              src="images/dg2.jpg"
              title="Monday Night Singles"
              text="Test your ability in this Raw scoring round! "
              label="Raw Scores"
              path="/products"
            />
            <CardItem
              src="images/dg4.jpg"
              title="Friday Dubs At Oyster Bay"
              text="Chabot Park takes over Oyster Bay on friday at 5pm"
              label="Best Throw"
              path="/layout"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
