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
  const [specificHole, setSpecificHole] = useState({});

  const setFirstHole = () => {
    const holeArr = hole.filter((hole) => {
      if (hole.number === '1') {
        return hole;
      }
    });
    setSpecificHole(holeArr[0]);
  };

  useEffect(function () {
    fetchLayout();
    fetchHole();
  }, []);

  useEffect(() => {
    setFirstHole();
  }, [hole]);

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

  const onSpecificHoleClick = (holeData) => {
    setSpecificHole(holeData);
  };

  const setNextHole = (nextNumber) => {
    if (nextNumber <= hole.length) {
      const nextHoleArr = hole.filter((hole) => {
        if (hole.number == nextNumber) {
          return hole;
        }
      });
      setSpecificHole(nextHoleArr[0]);
    }
  };

  const setPreviousHole = (previousNumber) => {
    if (previousNumber >= 1) {
      const previousHoleArr = hole.filter((hole) => {
        if (hole.number == previousNumber) {
          return hole;
        }
      });
      setSpecificHole(previousHoleArr[0]);
    }
  };

  return (
    <>
      <LayoutHero
        onSpecificHoleClick={onSpecificHoleClick}
        layout={layout}
        hole={hole}
      />
      <HoleDataSection
        hole={specificHole}
        setNextHole={setNextHole}
        setPreviousHole={setPreviousHole}
      />
      {/* <HoleContainer layout={layout} hole={(hole._id, hole)} /> */}
    </>
  );
}

export default Layout;
