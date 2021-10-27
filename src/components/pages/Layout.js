import React, { useState, useEffect } from 'react';
import '../../App.css';
import GoogleMapsContainer from '../GoogleMapContainer';
import LayoutContainer from '../layoutContainer';

import LayoutModel from '../models/layout';

function Layout() {
  const [layout, setLayout] = useState([{}]);
  // const [loading, setLoading] = useState(false);

  useEffect(function () {
    fetchLayout();
  }, []);

  const fetchLayout = (props) => {
    LayoutModel.show().then((json) => {
      // console.log(json);
      setLayout(json.layout[0]);
    });
  };
  return (
    <>
      <GoogleMapsContainer layout={layout} />
      <LayoutContainer layout={layout} />
    </>
  );
}

export default Layout;
