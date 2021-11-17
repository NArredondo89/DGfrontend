import React from 'react';
import { NavLink } from 'react-router-dom';

import GoogleMapsContainer from '../layoutcomponents/GoogleMapContainer';

import './layoutHero.css';

function LayoutHero({ layout, hole, onSpecificHoleClick }) {
  let frontNineNumber = hole.slice(0, 9).map((singlehole) => {
    return (
      <td
        onClick={() => onSpecificHoleClick(singlehole)}
        className="table__data"
        key={singlehole._id}
      >
        {singlehole.number}
      </td>
    );
  });

  let frontNineFeet = hole.slice(0, 9).map((singlehole) => {
    return (
      <td key={singlehole._id} className="table__data">
        {singlehole.feet}
      </td>
    );
  });

  let frontNinePar = hole.slice(0, 9).map((singlehole) => {
    return (
      <td key={singlehole._id} className="table__data">
        {singlehole.par}
      </td>
    );
  });

  let backNineNumber = hole.slice(9, 18).map((singlehole) => {
    return (
      <td
        onClick={() => onSpecificHoleClick(singlehole)}
        className="table__data"
        key={singlehole._id}
      >
        {singlehole.number}
      </td>
    );
  });

  let backNineFeet = hole.slice(9, 18).map((singlehole) => {
    return <td key={singlehole._id}>{singlehole.feet}</td>;
  });

  let backNinePar = hole.slice(9, 18).map((singlehole) => {
    return <td key={singlehole._id}>{singlehole.par}</td>;
  });

  return (
    <>
      <div className="layout__title__container">
        <h1>Layout Information</h1>
      </div>
      <div className="layout__container">
        <div className="layout__information__container">
          <div className="layout__title">{layout.title}</div>
          <div className="layout__total__container">
            <div className="totals">
              <div className="title">Total Holes</div>
              <div className="value">{layout.totalHoles}</div>
            </div>
            <div className="totals">
              <div className="title">Total Feet</div>
              <div className="value">{layout.totalFeet}</div>
            </div>
            <div className="totals">
              <div className="title">Total Par</div>
              <div className="value">{layout.totalPar}</div>
            </div>
          </div>
          <div className="hole__table__wrapper">
            <h3>Front Nine</h3>
            <div className="first__nine__wrapper">
              {layout.hole ? (
                <table className="table__front__nine">
                  <tr className="row__number">
                    <th className="row__title">Number</th>
                    {frontNineNumber}
                  </tr>
                  <tr className="row__feet">
                    <th className="row__title">Feet</th>
                    {frontNineFeet}
                  </tr>
                  <tr className="row__par">
                    <th className="row__title">Par</th>
                    {frontNinePar}
                  </tr>
                </table>
              ) : (
                'loading...'
              )}
            </div>
            <h3>Back Nine</h3>
            <div className="second__nine__wrapper">
              {layout.hole ? (
                <table className="table__front__nine">
                  <tr className="row__number">
                    <th className="row__title">Number</th>
                    {backNineNumber}
                  </tr>
                  <tr className="row__feet">
                    <th className="row__title">Feet</th>
                    {backNineFeet}
                  </tr>
                  <tr className="row__par">
                    <th className="row__title">Par</th>
                    {backNinePar}
                  </tr>
                </table>
              ) : (
                'loading...'
              )}
            </div>
          </div>
        </div>
        <div className="google__maps__container">
          <GoogleMapsContainer />
        </div>
      </div>
    </>
  );
}

export default LayoutHero;
