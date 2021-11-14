import React, { useState, useEffect } from 'react';
import '../../App.css';

////Containers//////

import LayoutHero from '../layoutcomponents/layoutHero';
// import HoleContainer from '../layoutcomponents/HoleContainer';
import HoleDataSection from '../layoutcomponents/HoleData';

/////Models//////
import LayoutModel from '../models/layout';
import HoleModel from '../models/hole';

function Layout() {
  const [layout, setLayout] = useState([{}]);
  const [hole, setHole] = useState([]);

  useEffect(function () {
    fetchLayout();
    fetchHole();
  }, []);

  const fetchLayout = (props) => {
    LayoutModel.show().then((res) => {
      setLayout(res.layout[0]);
    });
  };

  const fetchHole = () => {
    HoleModel.all().then((res) => {
      setHole(res.hole);
    });
  };
  return (
    <>
      <LayoutHero layout={layout} hole={hole} />
      <HoleDataSection hole={hole} />
      {/* <HoleContainer layout={layout} hole={(hole._id, hole)} /> */}
    </>
  );
}

export default Layout;
