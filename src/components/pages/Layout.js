import React, { useState, useEffect } from 'react';
import '../../App.css';

////Containers//////
import LayoutContainer from '../layoutContainer';
import HoleContainer from '../HoleContainer';

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
      // console.log(res);
      setLayout(res.layout[0]);
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
      <LayoutContainer layout={layout} hole={hole} />
      <HoleContainer layout={layout} hole={hole} />
    </>
  );
}

export default Layout;
