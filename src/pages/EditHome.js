import React, { useState, useEffect } from 'react';

/////Coure Model Imports///////
import CourseModel from '../models/course';
import LayoutModel from '../models/layout';
import HoleModel from '../models/hole';

///////Page Component Imports
// import EditSideBar from '../EditInformation/EditSideBar';
import EditParkInformation from '../components/EditInformation/EditParkInformation';

function EditHome() {
  const [course, setCourse] = useState({});
  const [layout, setLayout] = useState({});
  const [hole, setHole] = useState({});

  useEffect(function () {
    fetchCourse();
    fetchLayout();
    fetchHole();
  }, []);

  const fetchCourse = () => {
    CourseModel.show().then((json) => {
      setCourse(json.Course[0]);
    });
  };

  const fetchLayout = () => {
    LayoutModel.show().then((json) => {
      setLayout(json.layout[0]);
    });
  };

  const fetchHole = () => {
    HoleModel.all().then((json) => {
      setHole(json.hole);
      console.log(json, 'Hole Model');
    });
  };

  return (
    <>
      <EditParkInformation course={course} layout={layout} hole={hole} />
    </>
  );
}

export default EditHome;
