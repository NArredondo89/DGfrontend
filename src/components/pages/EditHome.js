import React, { useState, useEffect } from 'react';
import CourseModel from '../models/course';
import LayoutModel from '../models/layout';
import EditParkInformation from '../EditParkInformation';
import EditLayoutInformation from '../EditLayoutInformation';

// import EditHoleInformation from '../EditHoleInformation';

function EditHome() {
  const [course, setCourse] = useState({});
  const [layout, setLayout] = useState({});

  useEffect(function () {
    fetchCourse();
    fetchLayout();
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

  return (
    <>
      <EditParkInformation course={course} />
      <EditLayoutInformation layout={layout} />
    </>
  );
}

export default EditHome;
