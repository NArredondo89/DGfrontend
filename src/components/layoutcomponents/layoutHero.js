import React from 'react';
import { NavLink } from 'react-router-dom';

import GoogleMapsContainer from '../layoutcomponents/GoogleMapContainer';

import './layoutHero.css';

function LayoutHero(props) {
  let frontNineNumber = props.hole.slice(0, 9).map((singlehole) => {
    return (
      <td className="table__data">
        <NavLink to={`/layout/${singlehole._id}`}>{singlehole.number}</NavLink>
      </td>
    );
  });

  let frontNineFeet = props.hole.slice(0, 9).map((singlehole) => {
    return <td className="table__data">{singlehole.feet}</td>;
  });

  let frontNinePar = props.hole.slice(0, 9).map((singlehole) => {
    return <td className="table__data">{singlehole.par}</td>;
  });

  let backNineNumber = props.hole.slice(9, 18).map((singlehole) => {
    return (
      <td>
        <NavLink to={`/layout/${singlehole._id}`}>{singlehole.number}</NavLink>
      </td>
    );
  });

  let backNineFeet = props.hole.slice(9, 18).map((singlehole) => {
    return <td>{singlehole.feet}</td>;
  });

  let backNinePar = props.hole.slice(9, 18).map((singlehole) => {
    return <td>{singlehole.par}</td>;
  });

  return (
    <>
      <div className="layout__container">
        <div className="layout__information__container">
          <div className="layout__title">{props.layout.title}</div>
          <div className="layout__total__container">
            <div className="totals">
              <div className="title">Total Holes</div>
              <div className="value">{props.layout.totalHoles}</div>
            </div>
            <div className="totals">
              <div className="title">Total Feet</div>
              <div className="value">{props.layout.totalFeet}</div>
            </div>
            <div className="totals">
              <div className="title">Total Par</div>
              <div className="value">{props.layout.totalPar}</div>
            </div>
          </div>
          <div className="hole__table__wrapper">
            <h3>Front Nine</h3>
            <div className="first__nine__wrapper">
              {props.layout.hole ? (
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
              {props.layout.hole ? (
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
