import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const LayoutSideBar = (props) => {
  const [hole, setHole] = useState([]);

  // const holeInfo = props.hole;
  // const { _id, hole, par, feet } = holeInfo;

  let number = hole.map((singlehole) => {
    console.log(singlehole, 'hole table');
    return (
      <td>
        <NavLink to={`/layout/${singlehole._id}`}>{singlehole.hole}</NavLink>
      </td>
    );
  });

  // let feet = hole.map((singlehole) => {
  //   return <td>{singlehole.feet}</td>;
  // });

  // let par = hole.map((singlehole) => {
  //   return <td>{singlehole.par}</td>;
  // });

  return (
    <>
      <div className="side-bar-wrapper">
        <div className="layoutTitleContainer">
          <h4>{props.layout.tite}</h4>
        </div>
        <div className="layoutInformationContainer table">
          <table className="layoutContents">
            <thead>
              <tr>
                <th scope="col" className="col"></th>
                Hole #{number}
                <th scope="col" className="col">
                  Par
                </th>
                <th scope="col" className="col">
                  Feet
                </th>
              </tr>
              <tbody></tbody>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

// export default LayoutSideBar;
