import React from 'react';

function LayoutContainer(props) {
  console.log(props);
  return (
    <>
      <div className="layoutTitle">{props.layout.tite}</div>
      <div className="totalFeet">{props.layout.totalFeet}</div>
      <div className="totalHoles">{props.layout.totalHoles}</div>
      <div className="totalPar">{props.layout.totalPar}</div>
    </>
  );
}

export default LayoutContainer;
