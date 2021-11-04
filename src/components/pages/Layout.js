import React, { useState, useEffect } from 'react';
import '../../App.css';
import GoogleMapsContainer from '../GoogleMapContainer';
import HoleToggleInformation from '../HoleToggleInformation';
// import LayoutContainer from '../layoutContainer';
import LayoutModel from '../models/layout';
import HoleModel from '../models/hole';
// import LayoutSideBar from '../LayoutSideBar';

function Layout() {
  const [layout, setLayout] = useState([{}]);
  const [hole, setHole] = useState({});

  useEffect(function () {
    fetchLayout();
    fetchHole();
  }, []);

  const fetchLayout = (props) => {
    LayoutModel.show().then((json) => {
      // console.log(json);
      setLayout(json.layout[0]);
    });
  };

  const fetchHole = () => {
    HoleModel.all().then((res) => {
      // console.log(res)
      setHole(res.hole);
    });
  };
  return (
    <>
      <GoogleMapsContainer layout={layout} />
      {/* <LayoutContainer layout={layout} /> */}
      {/* <LayoutSideBar hole={hole} layout={layout} /> */}

      <HoleToggleInformation layout={layout} />
    </>
  );
}

export default Layout;
